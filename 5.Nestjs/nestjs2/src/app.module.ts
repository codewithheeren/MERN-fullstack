import { BookController } from './book.controller';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
   UsersController,
   BookController,
  ],
  providers: [],
})
export class AppModule { }
