import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find(); // Select * FROM user
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)
    // Use 'save' instead of 'update' as 'save' tells which data was saved
    // while the 'update' tells generic whether the data was saved
    return this.usersRepository.save({...user, ...updateUserDto});
  }

  async remove(id: number) {
    const user = await this.findOne(id)

    // user 'remove' instead of 'delete' as 'remove' tells which data was deleted while
    // 'delete' tells generic that a data was deleted
    return this.usersRepository.remove(user); 
  }
}
