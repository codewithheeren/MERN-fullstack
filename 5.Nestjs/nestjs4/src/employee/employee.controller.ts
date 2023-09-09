import { Controller,Get } from '@nestjs/common';
@Controller("/emanage")
export class EmployeeController {

    @Get("/home")
    welcome(): string{
        return "Welcome to Employee Controller.";
    }
}
