import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmployeeController } from './employee.controller';

@Module({
    imports: [],
    controllers: [EmployeeController],
    providers: [],
})
export class EmployeeModule {
}
