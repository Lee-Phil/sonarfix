import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SupervisorService } from "../../services/supervisor/supervisor.service";
import { CreateSupervisorDto } from "../../dtos/CreateSupervisor.dto";

@Controller("supervisor")
export class SupervisorController {
  constructor(private supervisorService: SupervisorService) {}

  @Get("/search/:id")
  searchSupervisorById(@Param("id", ParseIntPipe) id: number) {
    const supervisor = this.supervisorService.findSupervisorById(id);
    console.log(supervisor, "hey look what we found");
    // Logic to return a Bad HTTP Request if we decide to use http headers
    // if (supervisor) return supervisor;
    // else throw new HttpException("Supervisor Not Found!", HttpStatus.BAD_REQUEST);
    return supervisor;
  }

  @Get("")
  getAllSupervisors() {
    return this.supervisorService.getSupervisors();
  }

  @Post("create")
  @UsePipes(ValidationPipe)
  createSupervisor(@Body() createSupervisorDto: CreateSupervisorDto) {
    this.supervisorService.createSupervisor(createSupervisorDto);
  }
}
