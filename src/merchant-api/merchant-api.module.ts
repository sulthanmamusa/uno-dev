import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { PaymentsController } from './controllers/payments.controller';
import { SettlementsController } from './controllers/settlements.controller';
import { RefundsController } from './controllers/refunds.controller';
import { DatabaseModule } from '../database/database.module';
import { InvoicesController } from './controllers/invoices.controller';

@Module({
    controllers: [
        CustomersController,
        InvoicesController,
        OrdersController,
        PaymentsController,
        RefundsController,
        SettlementsController,
    ],
    imports: [
        forwardRef(() => DatabaseModule)
    ]
})
export class MerchantApiModule { }
