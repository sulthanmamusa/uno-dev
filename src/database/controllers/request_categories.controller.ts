import { BaseController } from "./base.controller";
import { RequestCategories } from "../entities/request_categories.entity";
import { RequestCategoriesServices } from "../services/request_categories.service";
import { Post, Body, Controller } from "@nestjs/common";

@Controller('sa/request_categories')
export class RequestCategoriesController extends BaseController<RequestCategories> {
    constructor(
        private requestCategoriesService: RequestCategoriesServices
    ){
        super(requestCategoriesService)
    }

    @Post()
    async create(@Body() requestCategories: RequestCategories):Promise<any>{
        const result = await this.requestCategoriesService.create(requestCategories);
        return { statusCode: 201, data: {id: result}};
    }
}