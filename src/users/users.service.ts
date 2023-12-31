import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) 
    private userRepository: Repository<Users>){ }
    async findAll(): Promise<Users[]> {
        return this.userRepository.find();
      }
    
      async findOne(id: number): Promise<Users> {
        return this.userRepository.findOne({ where: { id } });
      }
    
      async create(user: Partial<Users>): Promise<Users> {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
      }
    
      async update(id: number, user: Partial<Users>): Promise<Users> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
      }
    
      async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }

   
}
