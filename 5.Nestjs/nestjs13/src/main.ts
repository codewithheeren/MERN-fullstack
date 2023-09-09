import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Implmeneting autherization on /users/manager request handler. 
// edit-
// jwt.strategy.ts, auth module - providers 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
