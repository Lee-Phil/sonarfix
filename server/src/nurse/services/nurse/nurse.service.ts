import { Injectable } from "@nestjs/common";
import { CreateNurseDto } from "../../../nurse/dtos/CreateNurse.dto";
import { PrismaService } from "../../../../prisma/prisma.service";

@Injectable()
export class NurseService {
  constructor(private prisma: PrismaService) {}

  findNurseById(id: number) {
    return this.prisma.user.findFirstOrThrow({
      where: { id: id, type: "NURSE" },
    });
  }

  getNurses() {
    return this.prisma.user.findMany({
      where: { type: "NURSE" },
    });
  }

  async createNurse(nurseDto: CreateNurseDto) {
    console.log(nurseDto);
    return await this.prisma.user.create({
      data: nurseDto,
    });
  }

  async createAnotherNurse(nurseDto: CreateNurseDto) {
    console.log(nurseDto);
    return await this.prisma.user.create({
      data: nurseDto,
    });
  }
}
