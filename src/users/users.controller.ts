import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUser } from './create-users.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post()
  @HttpCode(201) 
  async create(@Body() user: CreateUser): Promise<Users> {
    const createdUser = await this.usersService.create(user);
    return createdUser;
  }

  @Put(':id')
  async update (@Param('id') id: number, @Body() user: Users): Promise<any> {
    await this.usersService.update(id, user);
    return { message: 'User updated successfully' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    await this.usersService.delete(id);
    return { message: 'User deleted successfully' };
  }
 
}
