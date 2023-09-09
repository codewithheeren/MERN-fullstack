import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto'; // Import the UserDto

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // Returning a Promise<UserDto> in TypeScript indicates that the function 
  // is asynchronous and will eventually provide a UserDto result.
  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map(user => this.mapToDto(user));
  }

  async createUser(userDto: UserDto): Promise<UserDto> {
    const user = this.userRepository.create(userDto);
    await this.userRepository.save(user);
    return this.mapToDto(user);
  }

  async getUserById(id: number): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    return this.mapToDto(user);
  }

  async updateUser(id: number, userDto: UserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    Object.assign(user, userDto);
    await this.userRepository.save(user);
    return this.mapToDto(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.remove(user);
  }

  private mapToDto(user: User): UserDto {
    const userDto = new UserDto();
    userDto.firstName = user.firstName;
    userDto.lastName = user.lastName;
    userDto.username = user.username;
    userDto.email = user.email;
    userDto.age = user.age;
    return userDto;
  }
}
