import { MiddlewareBuilder, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// pipes
// 1. pipe is use to transform a type of value into another type
// 2. pipe is also use to validate http request input parameters or request body params.
// built in pipes ref -
// https://docs.nestjs.com/pipes#built-in-pipes

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  
  // Add your global middleware here
  app.use((req, res, next) => {
    console.log('Global middleware executed');
    next(); // Move to the next middleware or route handler
  });

  await app.listen(3000);
}
bootstrap();
