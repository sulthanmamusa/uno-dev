import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { PaymentsController } from './controllers/payments.controller';
import { SettlementsController } from './controllers/settlements.controller';
import { RefundsController } from './controllers/refunds.controller';

@Module({
  controllers: [
    CustomersController,
    OrdersController,
    PaymentsController,
    SettlementsController,
    RefundsController
  ]
})
export class MerchantApiModule {}
