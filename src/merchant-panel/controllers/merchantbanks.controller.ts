import { Controller, Get, Post, Body, Put, Param } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { CurrentUser } from "../../utility/decorators/current.user";
import { MerchantbanksService } from "../../database/services/merchantbanks.service";
import { Merchantbanks } from "../../database/entities/merchantbanks.entity";

@Controller('mp/merchantbanks')
export class MerchantbanksController extends BaseController {
    constructor(
        private merchantbanksService: MerchantbanksService
    ) {
        super()
    }

    @Get()
    async findAll(@CurrentUser() merchant: any): Promise<any> {
        const result = await this.merchantbanksService.findAll({
            where: {merchant_id: merchant.id},
            select:['id','bankname','accountname','accountnumber','accounttype','ifsc']
        });
        return { statusCode: 200, data: result };
    }

    @Post()
    async create(@Body() merchantbanks: Merchantbanks, @CurrentUser() merchant: any): Promise<any> {
        merchantbanks.merchant_id = merchant.id;
        const result = await this.merchantbanksService.create(merchantbanks);
        return { statusCode: 201, data: result };
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() merchantbanks: Merchantbanks, @CurrentUser() merchant: any): Promise<any> {
        merchantbanks.merchant_id = merchant.id;
        const result = await this.merchantbanksService.update(id,merchantbanks);
        return { statusCode: 201, data: result };
    }
}