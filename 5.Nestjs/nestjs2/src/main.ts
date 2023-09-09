import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//creating rest controller and relevent decorators.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
