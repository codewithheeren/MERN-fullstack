import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  constructor(private readonly authService : AuthService){}

  @Get("/users")
  @UseGuards(AuthGuard("local")) // configuring local strategy using inbuild gaurd.
  getHello(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get("/users/manager")
  @UseGuards(AuthGuard("local"))  
  //no autherization implemented yet.
  getManagerDetails(@Request() req): string {
    return "These are manager personal details.";
  }
}
