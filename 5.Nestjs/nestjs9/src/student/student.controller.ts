import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { JwtAuthGuard } from './jwtauth.gaurd';


@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents(): Student[] {
    return this.studentService.getAllStudents();
  }

  @Post()
  @UseGuards(JwtAuthGuard) // Apply the AgeGuard to this route
  addStudent(@Body() student: Student): string {
   this.studentService.addStudent(student);
   return "student added successfully."
  }

  @Get(':id')
  getStudentById(@Param('id') id: number): Student {
    return this.studentService.getStudentById(id);
  }
}
