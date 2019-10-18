import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/refunds')
export class RefundsController extends BaseController {

    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        return 'This endpoint is used for retrieving list of refunds based on optional parameters';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        return 'The following API retrieves the refund using the ID.';
    }

    @Post()
    async create(@Body() refund: any): Promise<any>{
        return 'This end-point create a refund.';
    }

}
