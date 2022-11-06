import { Test, TestingModule } from "@nestjs/testing";
import { SupervisorController } from "../src/supervisor/controllers/supervisor/supervisor.controller";
import { SupervisorService } from "../src/supervisor/services/supervisor/supervisor.service";
import { CreateSupervisorDto } from "../src/supervisor/dtos/CreateSupervisor.dto";

describe("SupervisorController", () => {
  let supervisorController: SupervisorController;
  let spySupervisorService: SupervisorService;

  const apiSupervisorService = {
    provide: SupervisorService,
    useFactory: () => ({
      findSupervisorById: jest.fn(() => {}),
      createSupervisor: jest.fn(),
      getSupervisors: jest.fn(),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupervisorController],
      providers: [SupervisorService, apiSupervisorService],
    }).compile();

    supervisorController = module.get<SupervisorController>(SupervisorController);
    spySupervisorService = module.get<SupervisorService>(SupervisorService);
  });

  it("should be defined", () => {
    expect(supervisorController).toBeDefined();
  });

  describe("Get all Supervisors", () => {
    it("Get() Calls supervisor Service method getSupervisors()", () => {
      supervisorController.getAllSupervisors();
      expect(spySupervisorService.getSupervisors).toHaveBeenCalled();
    });
  });

  describe("Get a Supervisor by ID", () => {
    it("method is being called", () => {
      const id = 3;
      supervisorController.searchSupervisorById(id);
      expect(spySupervisorService.findSupervisorById).toHaveBeenCalled();
      expect(spySupervisorService.findSupervisorById).toHaveBeenCalledWith(id);
    });
  });

  it("method is not returning null", () => {
    const id = 3;
    supervisorController.searchSupervisorById(id);
    expect(spySupervisorService.findSupervisorById).not.toEqual(null);
  });

  describe("Create Supervisor Post Request", () => {
    it("calling the createsupervisor method with param", () => {
      const dto = new CreateSupervisorDto();

      supervisorController.createSupervisor(dto);
      expect(spySupervisorService.createSupervisor).toHaveBeenCalled();
      expect(spySupervisorService.createSupervisor).toHaveBeenCalledWith(dto);
    });
  });

  it("ensuring the param is not null", () => {
    const dto = new CreateSupervisorDto();

    supervisorController.createSupervisor(dto);
    expect(spySupervisorService.createSupervisor).not.toEqual(null);
  });
});
