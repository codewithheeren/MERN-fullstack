import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EmployeeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Perform middleware logic here
    console.log('emanage Middleware executed');
    next(); // Move to the next middleware or route handler
  }
}
