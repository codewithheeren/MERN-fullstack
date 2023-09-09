export class Employee {
    public id: number;
    public name: string;
    public salary: number;
    public email: string;
  
    constructor(name: string, salary: number, email: string) {
      this.name = name;
      this.salary = salary;
      this.email = email;
    }
  }
  