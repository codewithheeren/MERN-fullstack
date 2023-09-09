import { MiddlewareBuilder, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//middleware 
//- works like a filter class.
//- every request goes through Middleware
//- use for limit request or security impl etc.
//- global middleware 
//- module middleware 
// 2 steps 
// creating middleware (employee.middleware.ts)
// register middleware  (employee.module implements NestModule and )
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  
  // Add your global middleware here
  app.use((req, res, next) => {
    // Perform any middleware logic here
    console.log('Global middleware executed');
    next(); // Move to the next middleware or route handler
  });

  await app.listen(3000);
}
bootstrap();
