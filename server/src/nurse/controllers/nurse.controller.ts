import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe, UsePipes } from "@nestjs/common";
import { NurseService } from "../services/nurse/nurse.service";
import { CreateNurseDto } from "../dtos/CreateNurse.dto";

@Controller("nurse")
export class NurseController {
  constructor(private nurseService: NurseService) {}

  @Get("/search/:id")
  searchNurseById(@Param("id", ParseIntPipe) id: number) {
    const foundNurse = this.nurseService.findNurseById(id);
    console.log(foundNurse, "this is outside of the check");
    // TODO: Exit Gracefully if not found, else function returns correct user when used properly
    // if (foundNurse instanceof Prisma.PrismaClientKnownRequestError) {
    //   console.log(foundNurse);
    //   throw new HttpException("Nurse not found!", HttpStatus.BAD_REQUEST);
    // }
    // if (!foundNurse) {
    //   throw new NotFoundException(`Could not find nurse with ${id}`);
    // }
    return foundNurse;
  }

  @Get("")
  getAllNurses() {
    return this.nurseService.getNurses();
  }

  // Validation Decorator which forces the use of the Validators in the DTO
  @Post("create")
  @UsePipes(ValidationPipe)
  createNurse(@Body() createNurseDto: CreateNurseDto) {
    this.nurseService.createNurse(createNurseDto);
  }
  @Get("test")
  getTestNurse() {
    return this.nurseService.getNurses();
  }

  // TODO: For future implementation in Services
  //     @Delete(':id')
  //     remove(@Param('id') id:string){
  //         return this.nurseService.remove(+id);
  //     }

  // TODO: For future implementation, include a possible updateDTO, and how to create one
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSupervisorDto: UpdateSupervisorDto) {
  //     return this.nurseService.update(+id, updateSupervisorDto);
  // }
}
