import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "user1",
            password: "admin",
            email: "user1@gmail.com"
        },
        {
            username: "user2",
            password: "admin",
            email: "user2@gmail.com"
        },
        {
            username: "john",
            password: "admin",
            email: "john@gmail.com"
        }
    ];
    getUserByName(username: string): User {
        return this.users.find((user: User) => user.username == username);
    }

}
