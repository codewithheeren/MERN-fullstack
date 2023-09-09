import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './users/role.guard';
import { CONSTANTS } from './users/constants';
@Controller()
export class AppController {
  constructor(private readonly authService : AuthService){}

  @Get("/users")
  @UseGuards(AuthGuard("local")) // configuring local strategy using inbuild gaurd.
  getHello(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get("/users/policy")
  @UseGuards(AuthGuard("jwt"))  
  getEmployeePolicy(@Request() req): string {
    return "These are employee policies, access by any company user.";
  }

  @Get("/users/manager")
  @UseGuards(AuthGuard("jwt"),new RoleGuard(CONSTANTS.ROLES.MANAGER))  
  getManagerDetails(@Request() req): string {
    return "These are manager personal details.";
  }

  @Get("/users/developer")
  @UseGuards(AuthGuard("jwt"),new RoleGuard(CONSTANTS.ROLES.DEVELOPER))  
  getDeveloperDetails(@Request() req): string {
    return "These are developer personal details.";
  }
}


// postman
// autherization  ->  bearerToken -> pass jwt token , now send request - 
// http://localhost:3000/users/manager