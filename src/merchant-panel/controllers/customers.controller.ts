import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { CustomersService } from "../../database/services/customers.service";
import { CurrentUser } from "../../utility/decorators/current.user";
import { Customers } from "../../database/entities/customers.entity";

@Controller('mp/customers')
export class CustomersController extends BaseController {
    constructor(
        private customersService: CustomersService
    ){
        super()
    }

    @Get()
    async getCustomers(@CurrentUser() merchant: any):Promise<any> {
       return await this.customersService.findAll({where:{merchant_id: merchant.id}, select: ['id','name','email']});
    }

    @Post()
    async create(@CurrentUser() merchant: any, @Body() customers: Customers): Promise<any> {
        customers.merchant_id = merchant.id;
        return await this.customersService.create(customers);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() customers: Customers, @CurrentUser() merchant: any): Promise<any> {
        customers.merchant_id = merchant.id;
        return await this.customersService.update(id,customers);
    }
}