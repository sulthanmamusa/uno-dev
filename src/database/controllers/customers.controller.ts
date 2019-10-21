import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../entities/customers.entity';
import { BaseController } from './base.controller';

@Controller('sa/customers')
export class CustomersController extends BaseController<Customers> {
    constructor(private readonly customersService: CustomersService){
        super(customersService)
    }

    @Post()
    async create(@Body() entity : Customers): Promise<number | object>{
	    return await this.customersService.create(entity);
    }
}