import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get("/getAll")
  findAllUsers(): string {
    return 'Get all users';
  }

  @Get('/getbyid/:id')
  findUserById(@Param('id') id: number): string {
    return `Get user with ID: ${id}`;
  }

  @Post("/add")
  createUser(@Body() userData: any): string {
    return userData;
  }

  @Put('update/:id')
  updateUser(@Param('id') id: number, @Body() userData: any): string {
    console.log(userData)
    return `Update user with ID: ${id}`;
  }

  @Delete('/delete/:id')
  removeUser(@Param('id') id: number): string {
    return `Delete user with ID: ${id}`;
  }
}
