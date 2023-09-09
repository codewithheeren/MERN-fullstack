import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//nest intro
//modules, creating custom modules, extentions installations.
// @Module
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
