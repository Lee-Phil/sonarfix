import { Injectable } from "@nestjs/common";
import { Status } from "@prisma/client";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateRequestDto } from "../../request/dtos/CreateRequest.dto";

const REQUESTS_PER_PAGE = 5;

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  async createRequest(requestDto: CreateRequestDto) {
    console.log(requestDto);
    return await this.prisma.request.create({ data: requestDto });
  }

  getRequests() {
    return this.prisma.request.findMany();
  }

  getRequestById(requestId: number) {
    return this.prisma.request.findFirstOrThrow({
      where: { id: requestId },
    });
  }

  totalAmountOfRequests(supervisorId: number) {
    return this.prisma.request.count({
      where: { supervisorID: supervisorId },
    });
  }

  totalAmountOfRequestsPerStatus(supervisorId: number, status: String) {
    return this.prisma.request.count({
      where: { supervisorID: supervisorId, status: status as Status },
    });
  }

  // update(id: number, updateRequestDto: UpdateRequestDto) {
  //   return `This action updates a #${id} request`;
  // }

  deleteRequest(requestId: number) {
    return this.prisma.request.delete({
      where: { id: requestId },
    });
  }

  filterMyRequestsSupervisor(supervisorId: number, page: number) {
    return this.prisma.request.findMany({
      skip: REQUESTS_PER_PAGE * (page - 1),
      take: REQUESTS_PER_PAGE,
      where: {
        supervisorID: supervisorId,
      },
      orderBy: {
        startTime: "desc",
      },
    });
  }

  filterRequestsByStatus(supervisorId: number, page: number, status: String) {
    return this.prisma.request.findMany({
      skip: REQUESTS_PER_PAGE * (page - 1),
      take: REQUESTS_PER_PAGE,
      where: {
        supervisorID: supervisorId,
        status: status as Status,
      },
      orderBy: {
        startTime: "desc",
      },
    });
  }
}
