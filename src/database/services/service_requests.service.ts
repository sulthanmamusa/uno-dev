import { BaseService } from "./base.service";
import { ServiceRequests } from "../entities/service_requests.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ServiceRequestsService extends BaseService<ServiceRequests> {
    constructor(
        @InjectRepository(ServiceRequests)
        private serviceRequestsRepository: Repository<ServiceRequests>
    ) {
        super(serviceRequestsRepository)
    }
}