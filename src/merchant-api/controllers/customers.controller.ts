import { Controller, Get, Param, Post, Put, Body } from "@nestjs/common";
import { BaseController } from "./base.controller";

@Controller('api/customers')
export class CustomersController extends BaseController {
    
    constructor(){
        super()
    }

    @Get()
    async findAll(): Promise<any> {
        return 'all customers';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return 'single customer';
    }

    @Post()
    async create(@Body() customer: any): Promise<any> {
        return 'customer created successfully!';
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() customer: any): Promise<any> {
        return 'customer updated successfully!';
    }
}