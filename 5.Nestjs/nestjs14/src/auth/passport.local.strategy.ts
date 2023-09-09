import { UnauthorizedException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/user.entity";
import { UserService } from "src/users/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){
    constructor(private userService: UserService) {
        super();
      }
    
      async validate(username: string, password: string): Promise<any> {
        const user: User = await this.userService.getUserByName(username);
        if(user == undefined)
          throw new UnauthorizedException();
        if(user.password == password)
            return user;
      }
    

}

