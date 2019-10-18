import { Controller, Post, Param, Get, Query } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/payments')
export class PaymentsController extends BaseController{
    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        return 'fetch all payments!';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        return 'fetch a single payment!';
    }

    @Post(':id/capture')
    async capture(@Param('id') id: number): Promise<any>{
        return 'payment captured successfully!';
    }

    @Post(':id/card')
    async card(@Param('id') id: number): Promise<any>{
        return {
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
    }

}
