import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Gaurd - use to protect application from unauthrize access.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
