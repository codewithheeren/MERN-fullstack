import { HttpException, HttpStatus } from '@nestjs/common';

export class InputMissingException extends HttpException {
  timestamp: string;
  code: string;
  message: string;

  constructor(message: string, code: string, timestamp?: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message,
        code,
        timestamp: timestamp || new Date().toISOString(),
      },
      HttpStatus.BAD_REQUEST,
    );

    this.timestamp = timestamp || new Date().toISOString();
    this.code = code;
    this.message = message;
  }
}
