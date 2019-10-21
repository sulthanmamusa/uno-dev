import { Controller, Post, Body } from '@nestjs/common';
import { PluginsService } from '../services/plugins.service';
import { Plugins } from '../entities/plugins.entity';
import { BaseController } from './base.controller';

@Controller('sa/plugins')
export class PluginsController extends BaseController<Plugins> {
    constructor(private readonly pluginsService: PluginsService){
        super(pluginsService)
    }

    @Post()
    async create(@Body() entity : Plugins): Promise<number | object>{
	    return await this.pluginsService.create(entity);
    }
}