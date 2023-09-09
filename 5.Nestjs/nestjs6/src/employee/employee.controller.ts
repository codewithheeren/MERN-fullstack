import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeePipe } from './EmployeePipe';
import { EmployeesService } from './employee.service';


@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @Post()
  @UsePipes(new EmployeePipe()) // Apply the custom validation pipe
  createEmployee(@Body() employee: Employee) {
    return this.employeesService.createEmployee(employee);
  }
}
