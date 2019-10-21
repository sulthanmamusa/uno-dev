import { Controller, Post, Body } from '@nestjs/common';
import { MethodsService } from '../services/methods.service';
import { Methods } from '../entities/methods.entity';
import { BaseController } from './base.controller';

@Controller('sa/methods')
export class MethodsController extends BaseController<Methods> {
    constructor(private readonly methodsService: MethodsService){
        super(methodsService)
    }

    @Post()
    async create(@Body() entity : Methods): Promise<number | object>{
	    return await this.methodsService.create(entity);
    }
}