import { Controller, Post, Param, Get, Query } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/payments')
export class PaymentsController extends BaseController{
    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        const result = 'fetch all payments!';
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = 'fetch a single payment!';
        return { statusCode: 200, data: result };
    }

    @Post(':id/capture')
    async capture(@Param('id') id: number): Promise<any>{
        const result = 'payment captured successfully!';
        return { statusCode: 201, data: result };
    }

    @Post(':id/card')
    async card(@Param('id') id: number): Promise<any>{
        const result = {
            "id": "card_6krZ6bcjoeqyV9",
            "entity": "card",
            "name": "Gaurav",
            "last4": "3335",
            "network": "Visa",
            "type": "debit",
            "issuer": "SBIN",
            "international": false,
            "emi": null
        };
        return { statusCode: 201, data: result };
    }

}
