import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/refunds')
export class RefundsController extends BaseController {

    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        const result = 'This endpoint is used for retrieving list of refunds based on optional parameters';
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = 'The following API retrieves the refund using the ID.';
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() refund: any): Promise<any>{
        const result = 'This end-point create a refund.';
        return { statusCode: 201, data: result };
    }

}
