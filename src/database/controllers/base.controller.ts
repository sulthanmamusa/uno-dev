import { BaseService } from "../services/base.service";
import { BaseEntity } from "../entities/base.entity";
import { Get, Body, Delete, Param, Put, UseGuards } from "@nestjs/common";
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
        const result = await this.baseService.findAll(conditions);
        return { statusCode: 200, data: result };
    }

    @Get('count')
    async countAll(conditions?: any): Promise<number | object> {
        const result =  await this.baseService.countAll(conditions);
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<T | object> {
        const result = await this.baseService.findOne(id);
        return { statusCode: 200, data: result };
    }
/*
    @Post()
    async create(@Body() entity : T): Promise<number | object>{
        const result = await this.baseService.create(entity);
        return { statusCode: 201, data: result };
    }
*/
    @Put(':id')
    async update(@Param('id') id: number, @Body() entity: T): Promise<boolean | object>{
        const result = await this.baseService.update(id,entity);
        return { statusCode: 200, data: result };
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean | object> {
        const result = await this.baseService.delete(id);
        return { statusCode: 200, data: result };
    }
}