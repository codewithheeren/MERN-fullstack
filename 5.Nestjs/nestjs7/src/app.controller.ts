import { BadRequestException, Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomException } from './custom.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // throw exception as response  
  @Get("/home")
  getHello(): string {
    throw new BadRequestException(
      {
        status: 400,
        error: "This is error message : predefine exception class"
      }
    );
  }

  //reciving exception from service layer . 
  @Get("/users")
  getAllUsers(): any {
    try {
      this.appService.getAllUsers()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: error
      }, HttpStatus.NOT_FOUND);
    }
  }
  
  // throw custom exception object
  @Get("/users/admin")
  getUser(): string {
    throw new CustomException("This is error message : Custom exception class");
  }
}
