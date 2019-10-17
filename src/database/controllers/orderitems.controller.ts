import { Controller } from '@nestjs/common';
import { OrderitemsService } from '../services/orderitems.service';
import { Orderitems } from '../entities/orderitems.entity';
import { BaseController } from './base.controller';

@Controller('sa/orderitems')
export class OrderitemsController extends BaseController<Orderitems> {
    constructor(private readonly orderitemsService: OrderitemsService){
        super(orderitemsService)
    }
}