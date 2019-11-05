import { Controller, Get, Query, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { RequestSourcesService } from "../../database/services/request_sources.service";
import { RequestSources } from "../../database/entities/request_sources.entity";

@Controller('admin/request_sources')
export class RequestSourcesController extends BaseController {
    constructor(
        private requestSourcesService: RequestSourcesService
    ) {
        super()
    }

    @Get()
    async findAll(@Query() qs: any): Promise<any> {
        const where: RequestSources = qs || { status: true };
        const result = await this.requestSourcesService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result = await this.requestSourcesService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() requestSources: RequestSources): Promise<any> {
        const result = await this.requestSourcesService.create(requestSources);
        return { statusCode: 201, data: { id: result }};
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() requestSources: RequestSources): Promise<any> {
        const result = await this.requestSourcesService.update(id, requestSources);
        return { statusCode: 201, data: result };
    }

    @Delete(':id')
    async delete(@Param('id') id: number):Promise<any> {
        const result = this.requestSourcesService.delete(id);
        return { statusCode: 201, data: result };
    }
}