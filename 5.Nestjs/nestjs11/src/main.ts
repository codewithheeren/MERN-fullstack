import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// authtication
// local authentication-
// create a security gaurd with list of users details, that does authentication for every
// http request basis on the provided list of user details.
// passport is the authetication library use in this application.
// we have different authentication strategy.(https://www.passportjs.org/packages/)
// In this project we use passport-local strategy.
// ref- architecture.jpg 
// install - 
// npm install --save @nestjs/passport passport passport-local
// npm install --save-dev @types/passport-local class-validator

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
