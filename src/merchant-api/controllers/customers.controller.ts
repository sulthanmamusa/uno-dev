import { Controller, Get, Param, Post, Put, Body, Query } from "@nestjs/common";
import { BaseController } from "./base.controller";

@Controller('api/customers')
export class CustomersController extends BaseController {
    
    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any> {
        const result = 'all customers';
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = 'single customer';
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() customer: any): Promise<any> {
        const result = 'customer created successfully!';
        return { statusCode: 201, data: result };
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() customer: any): Promise<any> {
        const result = 'customer updated successfully!';
        return { statusCode: 200, data: result };
    }
}