import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Orders } from '../../database/entities/orders.entity';
import { OrdersService } from '../../database/services/orders.service';
import { PaymentsService } from '../../database/services/payments.service';

@Controller('api/orders')
export class OrdersController extends BaseController {

    constructor(
        private ordersService: OrdersService,
        private paymentsService: PaymentsService
    ){
        super()
    }


    @Get()
    async findAll(@Query() qs: any): Promise<any> {
        const where: Orders = qs || {status: true};
        const result = await this.ordersService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = await this.ordersService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() order: Orders): Promise<any> {
        const result = await this.ordersService.create(order);
        return { statusCode: 201, data: result };
    }

    @Get(':id/payments')
    async findOneRelations(@Param('id') id: number): Promise<any> {
        const result = await this.paymentsService.findAll({where: {order_id: id}});
        return { statusCode: 200, data: result };
    }
}
