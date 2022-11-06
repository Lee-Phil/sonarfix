import { Module } from "@nestjs/common";
import { NurseModule } from "./nurse/nurse.module";
import { NurseController } from "./nurse/controllers/nurse.controller";
import { NurseService } from "./nurse/services/nurse/nurse.service";
import { UsersModule } from "./users/users.module";
import { PrismaModule } from "../prisma/prisma.module";
import { SupervisorModule } from "./supervisor/supervisor.module";
import { SupervisorController } from "./supervisor/controllers/supervisor/supervisor.controller";
import { SupervisorService } from "./supervisor/services/supervisor/supervisor.service";
import { RequestModule } from "./request/request.module";
import { RequestController } from "./request/controllers/request.controller";
import { RequestService } from "./request/services/request.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [SupervisorModule, NurseModule, UsersModule, PrismaModule, RequestModule],
  controllers: [AppController, NurseController, SupervisorController, RequestController],
  providers: [AppService, NurseService, SupervisorService, RequestService],
})
export class AppModule {}
