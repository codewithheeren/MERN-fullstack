import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ModifyResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    request.body.deptName = "HR Dept";
    request.body.subscription = "plan5"
    return next.handle().pipe(map((data)=>{
      return "modified response from interceptor";
    }));
  }
}
