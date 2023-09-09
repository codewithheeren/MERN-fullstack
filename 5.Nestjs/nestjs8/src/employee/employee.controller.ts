import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, Res, UseFilters } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

@Controller('emanage')
@UseFilters(new HttpExceptionFilter())
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/addemployee')
  // @UseFilters(new HttpExceptionFilter()) can also use at method level.
  saveEmployee(@Body() employee: Employee, @Res() response): void {
    const savedEmployee = this.employeeService.saveEmployeeData(employee);
    response.status(201).json(savedEmployee);
  }

  @Get('/getall')
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }

  @Get('/get/:id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number): Employee {
    return this.employeeService.getEmployeeById(id);
  }

  @Delete('/delete/:id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number, @Res() response): void {
    this.employeeService.deleteEmployee(id);
    response.sendStatus(204); // Send 204 No Content status code
  }

  @Put('/update')
  updateEmployee(@Body() employee: Employee, @Res() response): void {
    const updatedEmployee = this.employeeService.updateEmployeeData(employee);
    response.status(200).json(updatedEmployee);
  }
}
