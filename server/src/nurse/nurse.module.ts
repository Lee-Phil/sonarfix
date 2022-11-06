import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { NurseController } from "./controllers/nurse.controller";
import { ValidateNurseAccountMiddleware } from "./middlewares/validate-nurse-account.middleware";
import { ValidateNurseMiddleware } from "./middlewares/validate-nurse.middleware";
import { NurseService } from "./services/nurse/nurse.service";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [NurseController],
  providers: [NurseService],
})
export class NurseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply
      // TODO: reimplement these features before production
      // ValidateNurseMiddleware,
      // ValidateNurseAccountMiddleware
      ()
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
      .forRoutes(
        NurseController
        // TODO: reimplement these features before production
        //     {
        //     path: 'nurse/search/:id',
        //     method: RequestMethod.GET,
        // },
        // {
        //     path: 'nurse/:id',
        //     method: RequestMethod.GET,
        // }
      );
  }
}
