import { Injectable } from "@nestjs/common";
import { CreateSupervisorDto } from "src/supervisor/dtos/CreateSupervisor.dto";
import { PrismaService } from "../../../../prisma/prisma.service";

@Injectable()
export class SupervisorService {
  constructor(private prisma: PrismaService) {}

  findSupervisorById(id: number) {
    return this.prisma.user.findFirstOrThrow({
      where: { id: id, role: "SUPERVISOR" },
    });
  }

  async createSupervisor(supervisorDto: CreateSupervisorDto) {
    console.log(supervisorDto);
    return await this.prisma.user.create({
      data: supervisorDto,
    });
  }

  getSupervisors() {
    return this.prisma.user.findMany({
      where: { role: "SUPERVISOR" },
    });
  }
}
