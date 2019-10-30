import { Module, forwardRef } from '@nestjs/common';
import { DashboardController } from './controllers/dashboard.controller';
import { PaymentsController } from './controllers/payments.controller';
import { DatabaseModule } from '../database/database.module';
import { CustomersController } from './controllers/customers.controller';
import { MerchantsController } from './controllers/merchants.controller';
import { OrdersController } from './controllers/orders.controller';
import { RefundsController } from './controllers/refunds.controller';
import { SettlementsController } from './controllers/settlements.conroller';
import { MerchantbanksController } from './controllers/merchantbanks.controller';

@Module({
    controllers: [
        CustomersController,
        DashboardController,
        MerchantbanksController,
        MerchantsController,
        OrdersController,
        PaymentsController,
        RefundsController,
        SettlementsController
    ],
    imports:[
        forwardRef(() => DatabaseModule)
    ]
})
export class MerchantPanelModule { }
