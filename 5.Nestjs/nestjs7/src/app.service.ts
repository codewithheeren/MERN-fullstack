import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllUsers(): string {
    throw new NotFoundException("App Service : Users doesn't exist.")
  }
}
