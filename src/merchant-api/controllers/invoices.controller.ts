import { Controller, Post, Body, Put, Param, Delete, Get, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { InvoicesService } from '../../database/services/invoices.service';
import { Invoices } from '../../database/entities/invoices.entity';

@Controller('mp/invoices')
export class InvoicesController extends BaseController {
    constructor(
        private invoicesService: InvoicesService
    ) {
        super()
    }

    @Get()
    async findAll(@Query() qs?: any): Promise<any> {
        qs = qs || {status : true};
        const result = await this.invoicesService.findAll({
            where: qs
        });
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = await this.invoicesService.findOne(id);
        return { statusCode: 200, data: result };
    }
    @Post()
    async create(@Body() invoice: Invoices): Promise<any> {
        const result = await this.invoicesService.create(invoice);
        return { statusCode: 200, data: result };
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() invoice: Invoices): Promise<any> {
        const result = await this.invoicesService.update(id, invoice);
        return { statusCode: 201, data: result };
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        const result = await this.invoicesService.delete(id);
        return { statusCode: 201, data: result };
    }
}