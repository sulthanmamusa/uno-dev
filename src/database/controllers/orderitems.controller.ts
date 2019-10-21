import { Controller, Post, Body } from '@nestjs/common';
import { OrderitemsService } from '../services/orderitems.service';
import { Orderitems } from '../entities/orderitems.entity';
import { BaseController } from './base.controller';

@Controller('sa/orderitems')
export class OrderitemsController extends BaseController<Orderitems> {
    constructor(private readonly orderitemsService: OrderitemsService){
        super(orderitemsService)
    }

    @Post()
    async create(@Body() entity : Orderitems): Promise<number | object>{
        const result = await this.orderitemsService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}