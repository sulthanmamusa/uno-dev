import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Refunds } from '../../database/entities/refunds.entity';
import { RefundsService } from '../../database/services/refunds.service';

@Controller('api/refunds')
export class RefundsController extends BaseController {

    constructor(
        private refundsService: RefundsService
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs?: any): Promise<any>{
        const where: Refunds = qs || {status: true};
        const result = await this.refundsService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = await this.refundsService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() refund: Refunds): Promise<any>{
        const result = await this.refundsService.create(refund);;
        return { statusCode: 201, data: result };
    }

}
