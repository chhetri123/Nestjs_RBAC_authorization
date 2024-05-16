import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { userSetter } from "./middlewares/user.middleware";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(userSetter);

  await app.listen(3000);
}
bootstrap();
