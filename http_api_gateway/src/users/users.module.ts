import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatClientModule } from 'src/nats_client/nats_client.module';

@Module({
  imports: [NatClientModule],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
