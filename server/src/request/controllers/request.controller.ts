import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateRequestDto } from "../dtos/CreateRequest.dto";
import { RequestService } from "../services/request.service";

@Controller("request")
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post("create")
  createRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Get("")
  getAllRequests() {
    return this.requestService.getRequests();
  }

  @Get("/search/:requestId")
  searchRequestById(@Param("requestId", ParseIntPipe) requestId: number) {
    return this.requestService.getRequestById(requestId);
  }

  @Get("/search/amountRequests/:supervisorId")
  getTotalAmountOfRequests(@Param("supervisorId", ParseIntPipe) supervisorId: number) {
    return this.requestService.totalAmountOfRequests(supervisorId);
  }

  @Get("/search/amountRequests/:supervisorId/:status")
  getTotalAmountOfRequestsPerStatus(
    @Param("supervisorId", ParseIntPipe) supervisorId: number,
    @Param("status") status: String
  ) {
    return this.requestService.totalAmountOfRequestsPerStatus(supervisorId, status);
  }

  @Get("/filter/:supervisorId/:page/:status")
  filterRequestStatus(
    @Param("supervisorId", ParseIntPipe) supervisorId: number,
    @Param("page", ParseIntPipe) page: number,
    @Param("status") status: String
  ) {
    return this.requestService.filterRequestsByStatus(supervisorId, page, status);
  }

  @Get("/filter/:supervisorId/:page")
  filterRequestBySupervisor(
    @Param("supervisorId", ParseIntPipe) supervisorId: number,
    @Param("page", ParseIntPipe) page: number
  ) {
    return this.requestService.filterMyRequestsSupervisor(supervisorId, page);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
  //    return this.requestService.update(+id, updateRequestDto);
  // }

  @Delete("/delete/:requestId")
  deleteRequest(@Param("requestId", ParseIntPipe) requestId: number) {
    return this.requestService.deleteRequest(requestId);
  }
}
