import { Controller, Get, Param, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { SettlementsService } from '../../database/services/settlements.service';
import { Settlements } from '../../database/entities/settlements.entity';

@Controller('api/settlements')
export class SettlementsController extends BaseController{

    constructor(
        private settlementsService: SettlementsService
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs?: any): Promise<any>{
        const where: Settlements = qs || {status: true};
        const result = await this.settlementsService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = await this.settlementsService.findOne(id);
        return { statusCode: 200, data: result };
    }


}
