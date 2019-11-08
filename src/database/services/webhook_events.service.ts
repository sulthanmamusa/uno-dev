import { BaseService } from "./base.service";
import { WebhookEvents } from "../entities/webhook_events.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WebhookEventsService extends BaseService<WebhookEvents>{
    constructor(
        @InjectRepository(WebhookEvents)
        private webhookEventsRepository: Repository<WebhookEvents>
    ){
        super(webhookEventsRepository)
    }
}