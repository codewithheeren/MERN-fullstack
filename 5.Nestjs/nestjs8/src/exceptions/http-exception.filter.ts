import { Catch, HttpException, HttpStatus, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { InputMissingException } from './input-missing.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log("executing or not");
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    if (exception instanceof InputMissingException) {
      const inputMissingException = exception as InputMissingException;
      response.status(status).json({
        statusCode: inputMissingException.code,
        timestamp: inputMissingException.timestamp,
        path: request.url,
        request: request.get("host"),
        message: inputMissingException.message,
      });
    } else {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        request: request.get("host"),
        message: exception.message,
      });
    }
  }
}
