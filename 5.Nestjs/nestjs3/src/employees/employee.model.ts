export class Employee {
    private id: number;
    private name: string;
    private age: number;
    private salary: number;
    
    constructor(id: number,name: string,age: number,salary: number) {
        this.id = id
        this.name = name
        this.age = age
        this.salary = salary
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

}

