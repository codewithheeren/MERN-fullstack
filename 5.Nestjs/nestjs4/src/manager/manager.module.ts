import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';

@Module({
    imports: [],
    controllers: [ManagerController],
    providers: [],
})
export class ManagerModule {}
