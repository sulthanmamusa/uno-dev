import { Controller, Query, Get, Param, Put, UseGuards } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { Merchants } from "../../database/entities/merchants.entity";
import { MerchantsService } from "../../database/services/merchants.service";

@Controller('admin/merchants')
export class MerchantsConroller extends BaseController {
    constructor(
        private merchantsService: MerchantsService
    ){
        super()
    }

    @Get()
    async findAll(@Query() qs: any): Promise<any>{
        const where: Merchants = qs || {status:true};
        const result =  await this.merchantsService.findAll({where});
        return { statusCode: 200, data: result };
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        const result =  await this.merchantsService.findOne(id);
        return { statusCode: 200, data: result };
    }

    @Put('approve/:id')
    async approve(@Param('id') id: number): Promise<any> {
        const result = await this.merchantsService.update(id, {approved: true});
        return { statusCode: 201, data: result };
    }
}