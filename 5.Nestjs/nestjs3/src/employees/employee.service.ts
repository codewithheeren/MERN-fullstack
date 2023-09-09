import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [
    new Employee(21, 'John', 21, 25000),
    new Employee(11, 'Tom', 33, 32000),
    new Employee(15, 'Timmy', 35, 43000),
  ];

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee {
    console.log(id);
    for (const employee of this.employees) {
      if (employee.getId() == id) {
        return employee;
      }
    }
    return null;
  }
  

  addEmployee(emp: Employee): string {
    this.employees.push(emp);
    return 'Employee has been successfully added.';
  }

  deleteEmployee(deleteObjId: number): string {
    const index = this.employees.findIndex(
      (employee) => employee.getId() == deleteObjId,
    );
    if (index !== -1) {
      this.employees.splice(index, 1);
      return 'Employee has been successfully deleted.';
    }
    return 'Employee not found.';
  }

  updateEmployee(updateObjectId: number, emp: Employee): string {
    const index = this.employees.findIndex(
      (employee) => employee.getId() == updateObjectId,
    );
    if (index !== -1) {
      this.employees[index] = emp;
      return 'Employee has been successfully updated.';
    }
    return 'Employee not found.';
  }
}
