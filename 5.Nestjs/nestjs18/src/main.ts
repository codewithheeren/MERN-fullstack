import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// custom repository implementation
// npm install --save @nestjs/typeorm typeorm 
// npm install pg --save  
// npm i --save @nestjs/config 
// create all files for user module crud opertaion- nest g res user  (not working due to nest path issue)
// cutom query builder - https://typeorm.io/select-query-builder#what-is-querybuilder
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
