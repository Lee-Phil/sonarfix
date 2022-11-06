import { Test, TestingModule } from "@nestjs/testing";
import { CreateNurseDto } from "../src/nurse/dtos/CreateNurse.dto";
import { NurseService } from "../src/nurse/services/nurse/nurse.service";

class nurseServiceMock {
  findNurseById(id: number) {
    return {};
  }
  getNurses() {
    return [];
  }
  createNurse(nurseDto: CreateNurseDto) {
    return {};
  }
}

describe("NurseService", () => {
  let service: NurseService;

  beforeEach(async () => {
    const serviceMock = {
      provide: NurseService,
      useClass: nurseServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [NurseService, serviceMock],
    }).compile();

    service = module.get<NurseService>(NurseService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("find nurse by ID called with expected params", () => {
    const findNurseSpy = jest.spyOn(service, "findNurseById");
    const id = 1;
    service.findNurseById(id);
    expect(findNurseSpy).toHaveBeenCalledWith(id);
  });

  it("find nurse by ID is called", () => {
    const findNurseSpy = jest.spyOn(service, "findNurseById");
    const id = 1;
    service.findNurseById(id);
    expect(findNurseSpy).toHaveBeenCalled();
  });

  it("create nurse called with expected params", () => {
    const createNurseSpy = jest.spyOn(service, "createNurse");
    const dto = new CreateNurseDto();
    service.createNurse(dto);
    expect(createNurseSpy).toHaveBeenCalledWith(dto);
  });

  it("create nurse is called", () => {
    const createNurseSpy = jest.spyOn(service, "createNurse");
    const dto = new CreateNurseDto();
    service.createNurse(dto);
    expect(createNurseSpy).toHaveBeenCalled();
  });

  it("get Nurses is called", () => {
    const getNurseSpy = jest.spyOn(service, "getNurses");
    service.getNurses();
    expect(getNurseSpy).toHaveBeenCalled();
  });
});
