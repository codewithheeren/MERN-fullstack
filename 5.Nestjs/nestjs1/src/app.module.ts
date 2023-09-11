import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log("App Module invoke.");
  }
}
