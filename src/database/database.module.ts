import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constants } from './entities/constants.entity';
import { ConstantsService } from './services/constants.service';
import { ConstantsController } from './controllers/constants.controller';
import { Credentials } from './entities/credentials.entity';
import { Customerbanks } from './entities/customerbanks.entity';
import { Customers } from './entities/customers.entity';
import { Faqs } from './entities/faqs.entity';
import { Methods } from './entities/methods.entity';
import { Orderitems } from './entities/orderitems.entity';
import { Orders } from './entities/orders.entity';
import { Payments } from './entities/payments.entity';
import { Plugins } from './entities/plugins.entity';
import { Products } from './entities/products.entity';
import { Refunds } from './entities/refunds.entity';
import { Settlements } from './entities/settlements.entity';
import { Subscriptions } from './entities/subscriptions.entity';
import { Transactions } from './entities/transactions.entity';
import { Wallets } from './entities/wallets.entity';
import { CredentialsService } from './services/credentials.service';
import { CustomerbanksService } from './services/customerbanks.service';
import { CustomersService } from './services/customers.service';
import { FaqsService } from './services/faqs.service';
import { MethodsService } from './services/methods.service';
import { OrderitemsService } from './services/orderitems.service';
import { OrdersService } from './services/orders.service';
import { PaymentsService } from './services/payments.service';
import { PluginsService } from './services/plugins.service';
import { ProductsService } from './services/products.service';
import { RefundsService } from './services/refunds.service';
import { SettlementsService } from './services/settlements.service';
import { SubscriptionsService } from './services/subscriptions.service';
import { TransactionsService } from './services/transactions.service';
import { WalletsService } from './services/wallets.service';
import { CredentialsController } from './controllers/credentials.controller';
import { CustomerbanksController } from './controllers/customerbanks.controller';
import { CustomersController } from './controllers/customers.controller';
import { FaqsController } from './controllers/faqs.controller';
import { MethodsController } from './controllers/methods.controller';
import { OrderitemsController } from './controllers/orderitems.controller';
import { OrdersController } from './controllers/orders.controller';
import { PaymentsController } from './controllers/payments.controller';
import { PluginsController } from './controllers/plugins.controller';
import { ProductsController } from './controllers/products.controller';
import { RefundsController } from './controllers/refunds.controller';
import { SettlementsController } from './controllers/settlements.controller';
import { SubscriptionsController } from './controllers/subscriptions.controller';
import { TransactionsController } from './controllers/transactions.controller';
import { WalletsController } from './controllers/wallets.controller';

import { Roles } from './entities/roles.entity';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';

import { Users } from './entities/users.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

import { Merchants } from './entities/merchants.entity';
import { MerchantsService } from './services/merchants.service';
import { MerchantsController } from './controllers/merchants.controller';

import { JwtStrategy } from '../auth/jwt.strategy';



const entities = [
	Constants,
	Credentials,
	Customerbanks,
	Customers,
	Faqs,
	Methods,
	Orderitems,
	Orders,
	Payments,
	Plugins,
	Products,
	Refunds,
	Roles,
	Settlements,
	Subscriptions,
	Transactions,
	Users,
	Wallets,
	Merchants
];
const services = [
	ConstantsService,
	CredentialsService,
	CustomerbanksService,
	CustomersService,
	FaqsService,
	MethodsService,
	OrderitemsService,
	OrdersService,
	PaymentsService,
	PluginsService,
	ProductsService,
	RefundsService,
	RolesService,
	SettlementsService,
	SubscriptionsService,
	TransactionsService,
	UsersService,
	WalletsService,
	MerchantsService
];
const controllers = [
	ConstantsController,
	CredentialsController,
	CustomerbanksController,
	CustomersController,
	FaqsController,
	MethodsController,
	OrderitemsController,
	OrdersController,
	PaymentsController,
	PluginsController,
	ProductsController,
	RefundsController,
	RolesController,
	SettlementsController,
	SubscriptionsController,
	TransactionsController,
	UsersController,
	WalletsController,
	MerchantsController
];

@Module({
    imports:[
		TypeOrmModule.forFeature([...entities])
    ],
    providers:[...services, JwtStrategy],
	controllers: [...controllers],
	exports:[...services]
})
export class DatabaseModule {}
