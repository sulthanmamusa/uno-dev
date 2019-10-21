import { Controller, Post, Body } from '@nestjs/common';
import { InvoicesService } from '../services/invoices.service';
import { Invoices } from '../entities/invoices.entity';
import { BaseController } from './base.controller';

@Controller('sa/invoices')
export class InvoicesController extends BaseController<Invoices> {
    constructor(private readonly invoicesService: InvoicesService){
        super(invoicesService)
    }

    @Post()
    async create(@Body() entity : Invoices): Promise<number | object>{
	    return await this.invoicesService.create(entity);
    }
}