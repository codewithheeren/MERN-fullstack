import { Module } from '@nestjs/common';
import { EmployeeService } from './employee/employee.service';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { EmployeeController } from './employee/employee.controller';


@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService, HttpExceptionFilter],
})
export class AppModule { }
