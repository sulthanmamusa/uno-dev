import { Controller, Post, Body } from '@nestjs/common';
import { RefundsService } from '../services/refunds.service';
import { Refunds } from '../entities/refunds.entity';
import { BaseController } from './base.controller';

@Controller('sa/refunds')
export class RefundsController extends BaseController<Refunds> {
    constructor(private readonly refundsService: RefundsService){
        super(refundsService)
    }

    @Post()
    async create(@Body() entity : Refunds): Promise<number | object>{
        const result = await this.refundsService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}