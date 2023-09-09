import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Interceptor -  are use to intercept the request and response and apply request and response 
// data changes.
// Interceptor implements AOP in nest application.
// difference between middle ware and interceptor. since both looks same as both are 
// use to intercept the request. but middle ware only can changes request data it can not 
// change response while interceptor apply changes on request or response.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
