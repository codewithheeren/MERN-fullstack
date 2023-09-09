import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Implementing configuration file like spring boot properties file
// ref - https://docs.nestjs.com/techniques/configuration
// npm i --save @nestjs/config 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT); //it is by default reading from .env file.
  // console.log(process.env.LOGGING);
  await app.listen(3000);
}
bootstrap();
