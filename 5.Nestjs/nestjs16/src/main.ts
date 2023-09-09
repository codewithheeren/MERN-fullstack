import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// POSTGRES DATABASE INTEGRATION 
// Type ORM and sqelize both has default support by nest.
// However TYPE ORM is most famous with nestjs.
// TYPE ORM implementation for db intraction.
// ref- https://docs.nestjs.com/techniques/database
// npm install --save @nestjs/typeorm typeorm 
// npm install pg --save  // install porstres driver.
// npm i --save @nestjs/config  // to read configurations from env file.
// for mysql database
// npm install --save @nestjs/typeorm typeorm mysql2
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
