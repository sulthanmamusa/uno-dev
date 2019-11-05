import { Controller, Get, Query, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { ServiceRequestsService } from "../../database/services/service_requests.service";
import { ServiceRequests } from "../../database/entities/service_requests.entity";

@Controller('admin/service_requests')
export class ServiceRequestsController extends BaseController {
    constructor(
        private serviceRequestsService: ServiceRequestsService
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs: any): Promise<any> {
        const where: ServiceRequests = qs || { status: true };
        const result = await this.serviceRequestsService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = await this.serviceRequestsService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() serviceRequests: ServiceRequests): Promise<any> {
        const result = await this.serviceRequestsService.create(serviceRequests);
        return { statusCode: 201, data: { id: result }};
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() serviceRequests: ServiceRequests): Promise<any> {
        const result = await this.serviceRequestsService.update(id, serviceRequests);
        return { statusCode: 201, data: result };
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        const result = await this.serviceRequestsService.delete(id);
        return { statusCode: 201, data: result };
    }
}