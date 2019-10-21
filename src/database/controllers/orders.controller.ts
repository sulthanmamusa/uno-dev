import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../entities/orders.entity';
import { BaseController } from './base.controller';

@Controller('sa/orders')
export class OrdersController extends BaseController<Orders> {
    constructor(private readonly ordersService: OrdersService){
        super(ordersService)
    }

    @Post()
    async create(@Body() entity : Orders): Promise<number | object>{
	    return await this.ordersService.create(entity);
    }
}