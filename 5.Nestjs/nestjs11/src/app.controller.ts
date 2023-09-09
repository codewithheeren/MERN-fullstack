import { Controller, Get, UseGuards } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
@Controller()
export class AppController {

  @Get("/users")
  @UseGuards(AuthGuard("local")) // configuring local strategy using inbuild gaurd.
  getHello(): string {
    return "Hello Nest Js";
  }
}

/*
Get Request
http://localhost:3000/users
Payload
{
  "username": "user2",
  "password": "admin",
  "email": "user2@gmail.com"

}
*/