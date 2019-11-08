import { BaseController } from "./base.controller";
import { Webhooks } from "../entities/webhooks.entity";
import { WebhooksService } from "../services/webhooks.service";
import { Post, Body, Controller } from "@nestjs/common";

@Controller('sa/webhooks')
export class WebhooksController extends BaseController<Webhooks> {
    constructor(
        private webhooksService: WebhooksService
    ){
        super(webhooksService)
    }

    @Post()
    async create(@Body() webhooks: Webhooks){
        const result = await this.webhooksService.create(webhooks);
        return { statusCode: 201, data: { id: result } };
    }
}