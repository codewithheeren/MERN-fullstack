import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from './constants';


@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "john",
            password: "admin",
            email: "user1@gmail.com",
            role: CONSTANTS.ROLES.MANAGER
        },
        {
            username: "timmy",
            password: "admin",
            email: "user2@gmail.com",
            role: CONSTANTS.ROLES.DEVELOPER
        }
    ];
    getUserByName(username: string): User {
        return this.users.find((user: User) => user.username == username);
    }

}
