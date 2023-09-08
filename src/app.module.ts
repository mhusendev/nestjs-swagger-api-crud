import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { Users } from './users/users.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: '',
      database: 'nestjs_crud',
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
