import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// autherization token implementation using JWT - https://docs.nestjs.com/recipes/passport
// npm install --save @nestjs/jwt passport-jwt
// npm install --save-dev @types/passport-jwt
// edit-
// auth module - import and export , add auth.service.ts, AppController
// Decode generated jwt token and see inner details for testing pupose using this link-
// https://jwt.io/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
