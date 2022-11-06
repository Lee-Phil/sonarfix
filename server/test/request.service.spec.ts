import { Test, TestingModule } from "@nestjs/testing";
import { CreateRequestDto } from "../src/request/dtos/CreateRequest.dto";
import { RequestService } from "../src/request/services/request.service";

class RequestServiceMock {
  createRequest(requestDto: CreateRequestDto) {
    return {};
  }

  getRequests() {
    return [];
  }

  getRequestById(requestId: number) {
    return {};
  }

  deleteRequest(requestId: number) {
    return {};
  }

  filterMyRequestsSupervisor(supervisorId: number, page: number) {
    return [];
  }

  filterRequestsByStatus(isupervisorId: number, page: number, status: String) {
    return [];
  }

  totalAmountOfRequests(supervisorId: number) {
    return {};
  }

  totalAmountOfRequestsPerStatus(supervisorId: number, status: String) {
    return {};
  }
}

describe("RequestService", () => {
  let service: RequestService;

  beforeEach(async () => {
    const serviceMock = {
      provide: RequestService,
      useClass: RequestServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestService, serviceMock],
    }).compile();

    service = module.get<RequestService>(RequestService);
  });

  const supervisorId = 1;
  const requestId = 1;
  const dto = new CreateRequestDto();
  const page = 1;
  const status = "";

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("find request by ID called with expected params", () => {
    const findRequestSpy = jest.spyOn(service, "getRequestById");
    service.getRequestById(requestId);
    expect(findRequestSpy).toHaveBeenCalledWith(requestId);
  });

  it("find request by ID is called", () => {
    const findRequestSpy = jest.spyOn(service, "getRequestById");
    service.getRequestById(requestId);
    expect(findRequestSpy).toHaveBeenCalled();
  });

  it("create request called with expected params", () => {
    const createRequestSpy = jest.spyOn(service, "createRequest");
    service.createRequest(dto);
    expect(createRequestSpy).toHaveBeenCalledWith(dto);
  });

  it("create request is called", () => {
    const createRequestSpy = jest.spyOn(service, "createRequest");
    service.createRequest(dto);
    expect(createRequestSpy).toHaveBeenCalled();
  });

  it("get requests is called", () => {
    const getRequestsSpy = jest.spyOn(service, "getRequests");
    service.getRequests();
    expect(getRequestsSpy).toHaveBeenCalled();
  });

  it("delete request by ID called with expected params", () => {
    const deleteRequestSpy = jest.spyOn(service, "deleteRequest");
    service.deleteRequest(requestId);
    expect(deleteRequestSpy).toHaveBeenCalledWith(requestId);
  });

  it("delete request by ID is called", () => {
    const deleteRequestSpy = jest.spyOn(service, "deleteRequest");
    service.deleteRequest(requestId);
    expect(deleteRequestSpy).toHaveBeenCalled();
  });

  it("Filter Requests by Supervisor ID, is called", () => {
    const filterSpy = jest.spyOn(service, "filterMyRequestsSupervisor");
    service.filterMyRequestsSupervisor(supervisorId, page);
    expect(filterSpy).toHaveBeenCalled();
  });

  it("Filter Requests by Supervisor ID, is called with params", () => {
    const filterSpy = jest.spyOn(service, "filterMyRequestsSupervisor");
    service.filterMyRequestsSupervisor(supervisorId, page);
    expect(filterSpy).toHaveBeenCalledWith(supervisorId, page);
  });

  it("Filter Requests by status, is called", () => {
    const filterSpy = jest.spyOn(service, "filterRequestsByStatus");
    service.filterRequestsByStatus(supervisorId, page, status);
    expect(filterSpy).toHaveBeenCalled();
  });

  it("Filter Requests by status, is called with params", () => {
    const filterSpy = jest.spyOn(service, "filterRequestsByStatus");
    service.filterRequestsByStatus(supervisorId, page, status);
    expect(filterSpy).toHaveBeenCalledWith(supervisorId, page, status);
  });

  it("totalAmountOfRequests called", () => {
    const getRequestSpy = jest.spyOn(service, "totalAmountOfRequests");
    service.totalAmountOfRequests(supervisorId);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  it("totalAmountOfRequests called with expected params", () => {
    const getRequestSpy = jest.spyOn(service, "totalAmountOfRequests");
    service.totalAmountOfRequests(supervisorId);
    expect(getRequestSpy).toHaveBeenCalledWith(supervisorId);
  });

  it("totalAmountOfRequestsPerStatus called", () => {
    const getRequestSpy = jest.spyOn(service, "totalAmountOfRequestsPerStatus");
    service.totalAmountOfRequestsPerStatus(supervisorId, status);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  it("totalAmountOfRequestsPerStatus called with expected params", () => {
    const getRequestSpy = jest.spyOn(service, "totalAmountOfRequestsPerStatus");
    service.totalAmountOfRequestsPerStatus(supervisorId, status);
    expect(getRequestSpy).toHaveBeenCalledWith(supervisorId, status);
  });
});
