import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User>
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findByUsername(username: string): Promise<User | undefined> {
    return this.findOne({ where: { username } });
  }

  async findByAge(age: number): Promise<User[]> {
    return this.find({ where: { age } });
  }
}
