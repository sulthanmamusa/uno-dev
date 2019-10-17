import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';

@Module({
  controllers: [
    CustomersController,
    OrdersController
  ]
})
export class MerchantApiModule {}
