import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { RequestController } from "./controllers/request.controller";
import { RequestService } from "./services/request.service";

@Module({
  imports: [PrismaModule],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
