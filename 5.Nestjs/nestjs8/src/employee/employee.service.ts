import { Injectable, UseFilters } from '@nestjs/common';
import { Employee } from './employee.model';
import { InputMissingException } from 'src/exceptions/input-missing.exception';
import { NoSuchElementException } from 'src/exceptions/no-such-element.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';


@Injectable()
export class EmployeeService {
  private employees: Map<number, Employee> = new Map();

  saveEmployeeData(employee: Employee): Employee {
    // Your validation logic here
    if (!employee.name || employee.name.length === 0 ) {
      throw new InputMissingException('Name can not be empty.', '701');
    }
    else if (employee.salary < 0) {
      throw new InputMissingException("Salary can not be negative or zero.", '701');
    }

    const id = this.employees.size + 1;
    employee.id = id;
    this.employees.set(id, employee);
    return employee;
  }

  getAllEmployees(): Employee[] {
    if (this.employees.size == 0)
     throw new InputMissingException('No record Found', '702');
    else 
     return Array.from(this.employees.values());
  }

  getEmployeeById(id: number): Employee {
    const employee = this.employees.get(id);
    if (!employee) {
      throw new NoSuchElementException('No data is present in the database with this object id.', '708');
    }
    return employee;
  }

  deleteEmployee(id: number): void {
    this.employees.delete(id);
  }

  updateEmployeeData(employee: Employee): Employee {
    const existingEmployee = this.employees.get(employee.id);
    if (!existingEmployee) {
      throw new NoSuchElementException('No employee found with the given ID.', '709');
    }
    existingEmployee.name = employee.name;
    existingEmployee.salary = employee.salary;
    existingEmployee.email = employee.email;
    return existingEmployee;
  }
}
