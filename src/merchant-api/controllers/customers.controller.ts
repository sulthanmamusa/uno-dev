import { Controller, Get, Param, Post, Put, Body, Query } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { Customers } from "../../database/entities/customers.entity";
import { CustomersService } from "../../database/services/customers.service";

@Controller('api/customers')
export class CustomersController extends BaseController {
    
    constructor(
        private customersService: CustomersService
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs?: any): Promise<any> {
        qs = qs || {status: true};
        const result = await this.customersService.findAll({where:qs});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = await this.customersService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() customer: Customers): Promise<any> {
        const result = await this.customersService.create(customer);
        return { statusCode: 201, data: result };
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() customer: Customers): Promise<any> {
        const result = await this.customersService.update(id,customer);
        return { statusCode: 201, data: result };
    }
}