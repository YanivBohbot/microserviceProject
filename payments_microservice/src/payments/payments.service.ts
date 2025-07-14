import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Payment } from 'src/typeorm/entities/Payment';
import { Repository } from 'typeorm/repository/Repository';
import { CreatePaymentDto } from './dtos/CreatePayments.dto';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
    const user = await lastValueFrom<User>(
      this.natsClient.send({ cmd: 'getUserById' }, { userId }),
    );
    console.log(user);
    if (user) {
      const newPayment = this.paymentsRepository.create({
        ...createPaymentDto,
        user,
      });
      console.log(newPayment);
      return this.paymentsRepository.save(newPayment);
    }
    return null;
  }
}
function InjectRepository(
  Payment: any,
): (
  target: typeof PaymentsService,
  propertyKey: undefined,
  parameterIndex: 0,
) => void {
  throw new Error('Function not implemented.');
}
