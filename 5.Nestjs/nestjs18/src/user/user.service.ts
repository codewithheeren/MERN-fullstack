  import { Injectable, NotFoundException } from '@nestjs/common';
  import { UserRepository } from './user.repository'; 
  import { UserDto } from './user.dto';            
  import { User } from './user.entity';

  // Returning a Promise<UserDto> in TypeScript indicates that the function 
  // is asynchronous and will eventually provide a UserDto result.
  @Injectable()
  export class UserService {
    
    constructor(private userRepository: UserRepository) {}

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
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return this.mapToDto(user);
    }

    async getByAge(age: number): Promise<UserDto[]> {
      const users = await this.userRepository.findByAge(age);
      return users.map(user => this.mapToDto(user));
    }

    async getByUsername(username: string): Promise<UserDto | undefined> {
      const user = await this.userRepository.findByUsername(username);
      return user ? this.mapToDto(user) : undefined;
    }

    async updateUser(id: number, userDto: UserDto): Promise<UserDto> {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      Object.assign(user, userDto);
      await this.userRepository.save(user);
      return this.mapToDto(user);
    }

    async deleteUser(id: number): Promise<void> {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
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

