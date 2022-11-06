import { Test, TestingModule } from "@nestjs/testing";
import { CreateRequestDto } from "../src/request/dtos/CreateRequest.dto";
import { RequestController } from "../src/request/controllers/request.controller";
import { RequestService } from "../src/request/services/request.service";

describe("RequestController", () => {
  let requestController: RequestController;
  let spyRequestService: RequestService;

  const apiRequestService = {
    provide: RequestService,
    useFactory: () => ({
      createRequest: jest.fn(),
      getRequests: jest.fn(),
      getRequestById: jest.fn(),
      totalAmountOfRequests: jest.fn(),
      totalAmountOfRequestsPerStatus: jest.fn(),
      deleteRequest: jest.fn(),
      filterMyRequestsSupervisor: jest.fn(),
      filterRequestsByStatus: jest.fn(),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestController],
      providers: [RequestService, apiRequestService],
    }).compile();

    requestController = module.get<RequestController>(RequestController);
    spyRequestService = module.get<RequestService>(RequestService);
  });

  const id = 2;
  const dto = new CreateRequestDto();
  const page = 1;
  const status = "";

  it("should be defined", () => {
    expect(requestController).toBeDefined();
  });

  describe("Get Requests", () => {
    it("Get all the requests to have been called", () => {
      requestController.getAllRequests();
      expect(spyRequestService.getRequests).toHaveBeenCalled();
    });
    it("Get Requests by id to have been called", () => {
      requestController.searchRequestById(id);
      expect(spyRequestService.getRequestById).toHaveBeenCalled();
    });
    it("Get Requests is called with Params", () => {
      requestController.searchRequestById(id);
      expect(spyRequestService.getRequestById).toHaveBeenCalledWith(id);
    });
  });

  describe("Post Requests", () => {
    it("Create a Request, method is called", () => {
      requestController.createRequest(dto);
      expect(spyRequestService.createRequest).toHaveBeenCalled();
    });

    it("Create a Request, with required params used", () => {
      requestController.createRequest(dto);
      expect(spyRequestService.createRequest).toHaveBeenCalledWith(dto);
    });
  });

  describe("Delete Requests", () => {
    it("delete a request, method is called", () => {
      requestController.deleteRequest(id);
      expect(spyRequestService.deleteRequest).toHaveBeenCalled();
    });
    it("delete a request, params are used", () => {
      requestController.deleteRequest(id);
      expect(spyRequestService.deleteRequest).toHaveBeenCalledWith(id);
    });
  });

  describe("Filter Requests by status", () => {
    it("filters a request (status and page), method is called", () => {
      requestController.filterRequestStatus(id, page, status);
      expect(spyRequestService.filterRequestsByStatus).toHaveBeenCalled();
    });
    it("filters a request (status and page), method is called with params", () => {
      requestController.filterRequestStatus(id, page, status);
      expect(spyRequestService.filterRequestsByStatus).toHaveBeenCalledWith(id, page, status);
    });
  });

  describe("Filter Requests by Supervisor ID", () => {
    it("filters a request (status and page), method is called", () => {
      requestController.filterRequestBySupervisor(id, page);
      expect(spyRequestService.filterMyRequestsSupervisor).toHaveBeenCalled();
    });
    it("filters a request (status and page), method is called with params", () => {
      requestController.filterRequestBySupervisor(id, page);
      expect(spyRequestService.filterMyRequestsSupervisor).toHaveBeenCalledWith(id, page);
    });
  });

  describe("Get Amount of Requests", () => {
    it("getTotalAmountOfRequestsPerStatusBySupervisorId is Called", () => {
      requestController.getTotalAmountOfRequestsPerStatus(id, status);
      expect(spyRequestService.totalAmountOfRequestsPerStatus).toHaveBeenCalled();
    });

    it("getTotalAmountOfRequestsPerStatusBySupervisorId is Called With Params", () => {
      requestController.getTotalAmountOfRequestsPerStatus(id, status);
      expect(spyRequestService.totalAmountOfRequestsPerStatus).toHaveBeenCalledWith(id, status);
    });

    it("getTotalAmountOfRequestsBySupervisorId is Called", () => {
      requestController.getTotalAmountOfRequests(id);
      expect(spyRequestService.totalAmountOfRequests).toHaveBeenCalled();
    });

    it("getTotalNumberOfRequestsPerStatus is Called With Params", () => {
      requestController.getTotalAmountOfRequests(id);
      expect(spyRequestService.totalAmountOfRequests).toHaveBeenCalledWith(id);
    });
  });
});
