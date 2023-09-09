import { StudentController } from './student/student.controller';
import { Module } from '@nestjs/common';
import { StudentService } from './student/student.service';


@Module({
  imports: [],
  controllers: [
    StudentController],
  providers: [StudentService],
})
export class AppModule { }
