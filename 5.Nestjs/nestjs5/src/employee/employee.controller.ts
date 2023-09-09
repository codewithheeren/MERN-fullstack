import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { EmployeePipe } from './EmployeePipe';
import { Employee } from './employee.model';
@Controller("/emanage")
export class EmployeeController {

    @Get("/home")
    welcome(): string{
        return "Welcome to Employee Controller.";
    }

    @Get("/:id")
    getEmployee(@Param("id",ParseIntPipe) id:number): string{
        console.log("id type : "+typeof(id));
        // explicitly typcaste require if ParseIntPipe will not use
        // id = Number(id);
        // console.log("after conversion id type : "+typeof(id));
        return "get employee by id invoke.";
    }

    // Custom pipe implementation 
    @Post("/")
    addEmployee(@Body(new EmployeePipe) employee:Employee): string{
        return "get employee by username invoke.";
    }
}

// http://localhost:3000/emanage/23
// http://localhost:3000/emanage/abc after pipe implemenation this will not work