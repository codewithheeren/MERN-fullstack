import { Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ModifyRequestInterceptor } from './modifyrequest.interceptor';
import { Request,Response } from 'express';
import { ModifyResponseInterceptor } from './modifyresponse.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post("/home")
  @UseInterceptors(ModifyRequestInterceptor) // enable interceptor for specific request handler.
  addResource(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body);
  }

  @Post("/resource")
  @UseInterceptors(ModifyResponseInterceptor) 
  getHome(): any {
    return "This is default response.";
  }

  @Get("/welcome")
  getHello(): string {
    return this.appService.getHello();
  }
}

