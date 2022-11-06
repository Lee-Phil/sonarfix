import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { SupervisorController } from "./controllers/supervisor/supervisor.controller";
import { SupervisorService } from "./services/supervisor/supervisor.service";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [SupervisorController],
  providers: [SupervisorService],
})
export class SupervisorModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude(
        {
          path: "api/nurse/create",
          method: RequestMethod.POST,
        },
        {
          path: "api/nurse",
          method: RequestMethod.GET,
        }
      )
      .forRoutes(SupervisorController);
  }
}
