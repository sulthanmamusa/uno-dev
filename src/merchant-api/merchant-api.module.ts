import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { PaymentsController } from './controllers/payments.controller';
import { SettlementsController } from './controllers/settlements.controller';
import { RefundsController } from './controllers/refunds.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    controllers: [
        CustomersController,
        OrdersController,
        PaymentsController,
        SettlementsController,
        RefundsController
    ],
    imports: [
        forwardRef(() => DatabaseModule)
    ]
})
export class MerchantApiModule { }
