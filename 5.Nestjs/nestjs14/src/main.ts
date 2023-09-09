import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Implmeneting role based autherization 
// edit-
// constants.ts,user.service.ts,role.gaurd.ts,app.controller.ts,
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
