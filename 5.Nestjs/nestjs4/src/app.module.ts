import { Module } from '@nestjs/common';
import { ManagerModule } from './manager/manager.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, ManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
