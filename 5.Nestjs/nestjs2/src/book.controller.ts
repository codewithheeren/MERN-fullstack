/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class BookController {
    @Get("/home")
    welcome(): string{
        return "Welcome Nest Based Rest API Project.";
     }
}
