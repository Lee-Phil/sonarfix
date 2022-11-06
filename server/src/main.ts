import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { env } from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: ["http://localhost:3000", "https://schedule-me-490.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("Median")
    .setDescription("The Median API description")
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("apimap", app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
