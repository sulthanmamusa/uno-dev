import { Controller, Get, Param, Query } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('settlements')
export class SettlementsController extends BaseController{

    constructor(){
        super()
    }

    @Get()
    async findAll(@Query() qr?: any): Promise<any>{
        return 'This api is used for retrieving all settlements.';
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        return 'This api is used to retrieve settlements made using the settlement id.';
    }


}
