import { Module } from '@nestjs/common';

import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payments';
import { User } from 'src/typeorm/entities/User';
import { USersMicroservicesController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [USersMicroservicesController],
  providers: [UsersService],
})
export class UsersModule {}
