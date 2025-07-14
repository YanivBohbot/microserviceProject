import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { NatClientModule } from '../nats_client/nats_client.module';
@Module({
  imports: [NatClientModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
