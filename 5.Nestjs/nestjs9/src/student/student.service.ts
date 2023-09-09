import { Injectable } from '@nestjs/common';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  private readonly students: Student[] = [];

  getAllStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getStudentById(id: number): Student {
    return this.students.find((student) => student.id === id);
  }
}
