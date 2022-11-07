import { Test, TestingModule } from "@nestjs/testing";
import { NurseService } from "../src/nurse/services/nurse/nurse.service";
import { NurseController } from "../src/nurse/controllers/nurse.controller";
import { CreateNurseDto } from "../src/nurse/dtos/CreateNurse.dto";

describe("NurseController Unit Tests", () => {
  let nurseController: NurseController;
  let spyNurseService: NurseService;

  const apiNurseService = {
    provide: NurseService,
    useFactory: () => ({
      findNurseById: jest.fn(() => {}),
      getNurses: jest.fn(),
      createNurse: jest.fn(),
      getTestNurse: jest.fn(),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NurseController],
      providers: [NurseService, apiNurseService],
    }).compile();

    nurseController = module.get<NurseController>(NurseController);
    spyNurseService = module.get<NurseService>(NurseService);
  });

  it("should be defined", () => {
    expect(nurseController).toBeDefined();
  });

  describe("Get All Nurses", () => {
    it("Get() Calls nurse Service method getNurses()", () => {
      nurseController.getAllNurses();
      expect(spyNurseService.getNurses).toHaveBeenCalled();
    });

    it("Calls nurse Service method getNurses()", () => {
      nurseController.getTestNurse();
      expect(spyNurseService.getNurses).toHaveBeenCalled();
    });
  });

  describe("Get a Nurse By ID", () => {
    it("method is being called", () => {
      const id = 1;
      nurseController.searchNurseById(id);
      expect(spyNurseService.findNurseById).toHaveBeenCalled();
      expect(spyNurseService.findNurseById).toHaveBeenCalledWith(id);
    });

    it("method is not returning null", () => {
      const id = 1;
      nurseController.searchNurseById(id);
      expect(spyNurseService.findNurseById).not.toEqual(null);
    });
  });

  describe("Create Nurse Post Request", () => {
    it("calling the createnurse method with param", () => {
      const dto = new CreateNurseDto();

      nurseController.createNurse(dto);
      expect(spyNurseService.createNurse).toHaveBeenCalled();
      expect(spyNurseService.createNurse).toHaveBeenCalledWith(dto);
    });

    it("ensuring the param is not null", () => {
      const dto = new CreateNurseDto();

      nurseController.createNurse(dto);
      expect(spyNurseService.createNurse).not.toEqual(null);
    });
  });
});
