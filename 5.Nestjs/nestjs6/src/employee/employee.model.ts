import { IsString, IsNotEmpty, IsNumber, IsDate, MinDate, MaxDate } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
export class Employee {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => new Date(value)) // Convert the incoming date string to Date object
  hireDate: Date;
}
