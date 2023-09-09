import { EmployeeService } from './../../../nestjs8/src/employee/employee.service';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { EmployeesController } from './employee.controller';


@Module({
    imports: [],
    controllers: [EmployeesController],
    providers: [
        EmployeeService,
        EmployeesService,],
})
export class EmployeeModule {
}
