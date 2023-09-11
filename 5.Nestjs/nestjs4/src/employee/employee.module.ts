import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeMiddleware } from './employee.middleware';

@Module({
    imports: [],
    controllers: [
        EmployeeController],
    providers: [],
})
export class EmployeeModule implements NestModule {
    // module level middleware registered.
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(EmployeeMiddleware).forRoutes("emanage");
    }
}
