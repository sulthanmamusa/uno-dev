import { Controller, Post, Body } from '@nestjs/common';
import { CustomerbanksService } from '../services/customerbanks.service';
import { Customerbanks } from '../entities/customerbanks.entity';
import { BaseController } from './base.controller';

@Controller('sa/customerbanks')
export class CustomerbanksController extends BaseController<Customerbanks> {
    constructor(private readonly customerbanksService: CustomerbanksService){
        super(customerbanksService)
    }

    @Post()
    async create(@Body() entity : Customerbanks): Promise<number | object>{
        const result = await this.customerbanksService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}