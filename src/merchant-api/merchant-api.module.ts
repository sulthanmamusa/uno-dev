import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { PaymentsController } from './controllers/payments.controller';
import { SettlementsController } from './controllers/settlements.controller';

@Module({
  controllers: [
    CustomersController,
    OrdersController,
    PaymentsController,
    SettlementsController
  ]
})
export class MerchantApiModule {}
