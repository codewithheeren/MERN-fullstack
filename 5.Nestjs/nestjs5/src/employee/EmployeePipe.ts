import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
//custom pipe
@Injectable()
export class EmployeePipe implements PipeTransform {
    
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("getting invoke");
    if(value.userid == 1) 
      return value ;
    else
    throw new BadRequestException("validation Failed");
 // return value.userid == 1;
  }
}