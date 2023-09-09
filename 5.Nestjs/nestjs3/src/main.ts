import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//creating service layer, providers, @injectable
//creating model , user extentions to create setter, getter and constructor
//debugging of code
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
