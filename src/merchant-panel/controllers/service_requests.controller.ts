import { Controller, Get, Query, Param, Post, Body } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { ServiceRequestsService } from "../../database/services/service_requests.service";
import { CurrentUser } from "../../utility/decorators/current.user";
import { ServiceRequests } from "../../database/entities/service_requests.entity";

@Controller('mp/service_requests')
export class ServiceRequestsController extends BaseController {
    constructor(
        private serviceRequestsService: ServiceRequestsService
    ) {
        super()
    }

    @Get()
    async findAll(@Query() qs: ServiceRequests, @CurrentUser() merchant: any): Promise<any> {
        const where = qs || { status: true };
        Object.assign(where, {merchant_id: merchant.id});
        const result = await this.serviceRequestsService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param(':id') id: number, @CurrentUser() merchant: any): Promise<any> {
        const result = await this.serviceRequestsService.findOne(id);
        if(result['merchant_id'] !== merchant.id) {
            return { statusCode: 401, message: 'Permission denied!' };
        }
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() serviceRequests: ServiceRequests, @CurrentUser() merchant: any): Promise<any> {
        Object.assign(serviceRequests, {merchant_id: merchant.id});
        const result = await this.serviceRequestsService.create(serviceRequests);
        return { statusCode: 201, data: result };
    }
}