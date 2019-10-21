import { Controller, Get, Param, Query } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('api/settlements')
export class SettlementsController extends BaseController{

    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        const result = 'This api is used for retrieving all settlements.';
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = 'This api is used to retrieve settlements made using the settlement id.';
        return { statusCode: 200, data: result };
    }


}
