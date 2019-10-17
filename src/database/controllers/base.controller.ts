import { BaseService } from "../services/base.service";
import { BaseEntity } from "../entities/base.entity";
import { Get, Post, Body, Delete, Param, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "../../auth/roles.decorator";
import { RolesGuard } from "../../auth/roles.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('super_admin')
export class BaseController<T extends BaseEntity> {
    constructor(private readonly baseService: BaseService<T>) {}

    @Get()
    async findAll(conditions?: any): Promise<T[] | object> {
        return await this.baseService.findAll(conditions);
    }

    @Get('count')
    async countAll(conditions?: any): Promise<number | object> {
        return await this.baseService.countAll(conditions);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<T | object> {
        return await this.baseService.findOne(id);
    }

    @Post()
    async create(@Body() entity : any): Promise<number | object>{
	    return await this.baseService.create(entity);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() entity: any): Promise<boolean | object>{
        return await this.baseService.update(id,entity);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean | object> {
        return await this.baseService.delete(id);
    }
}