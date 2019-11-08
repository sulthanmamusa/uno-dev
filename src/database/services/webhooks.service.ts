import { BaseService } from "./base.service";
import { Webhooks } from "../entities/webhooks.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WebhooksService extends BaseService<Webhooks>{
    constructor(
        @InjectRepository(Webhooks)
        private webhooksRepository: Repository<Webhooks>
    ){
        super(webhooksRepository)
    }
}