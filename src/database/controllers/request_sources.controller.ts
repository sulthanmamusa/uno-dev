import { BaseController } from "./base.controller";
import { RequestSources } from "../entities/request_sources.entity";
import { RequestSourcesService } from "../services/request_sources.service";
import { Post, Body, Controller } from "@nestjs/common";

@Controller('sa/request_sources')
export class RequestSourcesController extends BaseController<RequestSources> {
    constructor(
        private requestSourcesService: RequestSourcesService
    ){
        super(requestSourcesService)
    }

    @Post()
    async create(@Body() requestSources: RequestSources){
        const result = await this.requestSourcesService.create(requestSources);
        return { statusCode: 201, data: { id: result } };
    }
}