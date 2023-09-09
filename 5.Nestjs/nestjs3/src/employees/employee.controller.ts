import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  private employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  @Get()
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: number): Employee {
    console.log(this.employeeService.getEmployeeById(id));
    return this.employeeService.getEmployeeById(id);
  }

  @Post()
  addEmployee(@Body() emp: Employee): string {
    return this.employeeService.addEmployee(emp);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') deleteObjId: number): string {
    return this.employeeService.deleteEmployee(deleteObjId);
  }

  @Put(':id')
  updateEmployee(@Param('id') deleteObjId: number, @Body() emp: Employee): string {
    return this.employeeService.updateEmployee(deleteObjId, emp);
  }
}
