import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Orders } from '../../database/entities/orders.entity';

@Controller('api/orders')
export class OrdersController extends BaseController {

    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any> {
        return 'all orders';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return 'single order';
    }

    @Post()
    async create(@Body() order: Orders): Promise<any> {
        return 'order created successfully!';
    }

    @Get(':id/payments')
    async findOneRelations(@Param('id') id: number): Promise<any> {
        return 'single order with all payments';
    }
}
