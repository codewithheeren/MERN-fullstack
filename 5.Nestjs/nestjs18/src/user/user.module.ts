import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';


// @Module({
//   imports: [TypeOrmModule.forFeature([UserRepository])],
//   controllers: [UserController],
//   providers: [UserService], 
// })
// export class UserModule {}

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService,UserRepository], 
})
export class UserModule {}


