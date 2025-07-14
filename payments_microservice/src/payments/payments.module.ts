import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';

import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { User } from 'src/typeorm/entities/User';
import { NatsClientModule } from 'src/nats_client/nats-client.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, User]), NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
