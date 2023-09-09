import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//class decorator based validations
//npm install class-validator class-transformer
//npm install class-transformer

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
