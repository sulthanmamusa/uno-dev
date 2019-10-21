import { Controller, Post, Body } from '@nestjs/common';
import { SubscriptionsService } from '../services/subscriptions.service';
import { Subscriptions } from '../entities/subscriptions.entity';
import { BaseController } from './base.controller';

@Controller('sa/subscriptions')
export class SubscriptionsController extends BaseController<Subscriptions> {
    constructor(private readonly subscriptionsService: SubscriptionsService){
        super(subscriptionsService)
    }

    @Post()
    async create(@Body() entity : Subscriptions): Promise<number | object>{
        const result = await this.subscriptionsService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}