import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { EmployeesController } from './employee.controller';


@Module({
    imports: [],
    controllers: [EmployeesController],
    providers: [EmployeesService,],
})
export class EmployeeModule {
}
