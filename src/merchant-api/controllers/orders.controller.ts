import { Controller, Get, Post, Param } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/orders')
export class OrdersController extends BaseController {

    constructor(){
        super()
    }

    @Get()
    async findAll(): Promise<any> {
        return 'all orders';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return 'single order';
    }

    @Post()
    async create(): Promise<any> {
        return 'order created successfully!';
    }

    @Get(':id/payments')
    async findOneRelations(@Param('id') id: number): Promise<any> {
        return 'single order with all payments';
    }
}
