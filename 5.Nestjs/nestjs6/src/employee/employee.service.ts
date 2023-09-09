import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';


@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  createEmployee(employee: Employee): Employee {
    this.employees.push(employee);
    return employee;
  }
}