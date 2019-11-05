import { Controller, Query, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { RequestCategoriesServices } from "../../database/services/request_categories.service";
import { RequestCategories } from "../../database/entities/request_categories.entity";

@Controller('admin/request_categories')
export class RequestCategoriesController extends BaseController {
    constructor(
        private requestCategoriesService: RequestCategoriesServices
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs: any): Promise<any> {
        const where: RequestCategories = qs || { status: true };
        const result = await this.requestCategoriesService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        const result = await this.requestCategoriesService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() requestCategories: RequestCategories): Promise<any> {
        const result = await this.requestCategoriesService.create(requestCategories);
        return { statusCode: 201, data: { id: result }};
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() requestCategories: RequestCategories): Promise<any> {
        const result = await this.requestCategoriesService.update(id, requestCategories);
        return { statusCode: 201, data: result};
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        const result = await this.requestCategoriesService.delete(id);
        return { statusCode: 201, data: result};
    }
}