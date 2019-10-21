import { Controller, Post, Body } from '@nestjs/common';
import { SettlementsService } from '../services/settlements.service';
import { Settlements } from '../entities/settlements.entity';
import { BaseController } from './base.controller';

@Controller('sa/settlements')
export class SettlementsController extends BaseController<Settlements> {
    constructor(private readonly settlementsService: SettlementsService){
        super(settlementsService)
    }

    @Post()
    async create(@Body() entity : Settlements): Promise<number | object>{
	    return await this.settlementsService.create(entity);
    }
}