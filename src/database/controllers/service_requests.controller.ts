import { BaseController } from "./base.controller";
import { ServiceRequests } from "../entities/service_requests.entity";
import { ServiceRequestsService } from "../services/service_requests.service";
import { Post, Body, Controller } from "@nestjs/common";

@Controller('sa/service_requests')
export class ServiceRequestsController extends BaseController<ServiceRequests> {
    constructor(
        private serviceRequestsService: ServiceRequestsService
    ){
        super(serviceRequestsService)
    }

    @Post()
    async create(@Body() serviceRequests: ServiceRequests): Promise<any>{
        const result = await this.serviceRequestsService.create(serviceRequests);
    }
}