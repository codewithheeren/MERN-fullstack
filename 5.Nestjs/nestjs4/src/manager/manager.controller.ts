import { Controller,Get } from '@nestjs/common';

@Controller("/mmanage")
export class ManagerController {

    @Get("/home")
    welcome(): string{
        return "Welcome to Manager Controller.";
    }
}
