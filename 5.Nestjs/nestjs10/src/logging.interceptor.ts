import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(`Incoming ${request.method} request to ${request.url}`);

    return next.handle().pipe(
      tap(() => {
        console.log(`Outgoing ${request.method} request to ${request.url}`);
      }),
    );
  }
}
