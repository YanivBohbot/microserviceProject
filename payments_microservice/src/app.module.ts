import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';

import { Payment } from './typeorm/entities/Payment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [Payment, User],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
