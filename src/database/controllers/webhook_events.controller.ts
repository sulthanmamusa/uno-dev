import { BaseController } from "./base.controller";
import { WebhookEvents } from "../entities/webhook_events.entity";
import { WebhookEventsService } from "../services/webhook_events.service";
import { Post, Body, Controller } from "@nestjs/common";

@Controller('sa/webhook_events')
export class WebhookEventsController extends BaseController<WebhookEvents>(WebhookEvents) {
    constructor(
        private webhookEventsService: WebhookEventsService
    ){
        super(webhookEventsService)
    }

    @Post()
    async create(@Body() webhookEvents: WebhookEvents){
        const result = await this.webhookEventsService.create(webhookEvents);
        return { statusCode: 201, data: { id: result } };
    }
}