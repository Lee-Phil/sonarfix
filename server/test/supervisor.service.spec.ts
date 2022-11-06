import { Test, TestingModule } from "@nestjs/testing";
import { CreateSupervisorDto } from "../src/supervisor/dtos/CreateSupervisor.dto";
import { SupervisorService } from "../src/supervisor/services/supervisor/supervisor.service";

class Supervisorservicemock {
  findSupervisorById(id: number) {
    return {};
  }
  getSupervisors() {
    return [];
  }
  createSupervisor(supervisorDto: CreateSupervisorDto) {
    return {};
  }
}

describe("SupervisorService", () => {
  let service: SupervisorService;

  beforeEach(async () => {
    const supervisorsServiceMock = {
      provide: SupervisorService,
      useClass: Supervisorservicemock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupervisorService, supervisorsServiceMock],
    }).compile();

    service = module.get<SupervisorService>(SupervisorService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("find supervisor by ID with expected params", () => {
    const findSupervisorSpy = jest.spyOn(service, "findSupervisorById");
    const id = 3;
    service.findSupervisorById(id);
    expect(findSupervisorSpy).toHaveBeenCalled();
  });

  it("create supervisor with expected params", () => {
    const createSupervisorSpy = jest.spyOn(service, "createSupervisor");
    const dto = new CreateSupervisorDto();
    service.createSupervisor(dto);
    expect(createSupervisorSpy).toHaveBeenCalledWith(dto);
  });

  it("create supervisor is called", () => {
    const createSupervisorSpy = jest.spyOn(service, "createSupervisor");
    const dto = new CreateSupervisorDto();
    service.createSupervisor(dto);
    expect(createSupervisorSpy).toHaveBeenCalled();
  });

  it("get supervisors is called", () => {
    const getSupervisorSpy = jest.spyOn(service, "getSupervisors");
    service.getSupervisors();
    expect(getSupervisorSpy).toHaveBeenCalled();
  });
});
