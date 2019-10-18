import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { PaymentsController } from './controllers/payments.controller';

@Module({
  controllers: [
    CustomersController,
    OrdersController,
    PaymentsController
  ]
})
export class MerchantApiModule {}
