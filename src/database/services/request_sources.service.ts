import { BaseService } from "./base.service";
import { RequestSources } from "../entities/request_sources.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RequestSourcesService extends BaseService<RequestSources>{
    constructor(
        @InjectRepository(RequestSources)
        private requestResourcesRepository: Repository<RequestSources>
    ){
        super(requestResourcesRepository)
    }
}