import { Controller, Get, Post, Body } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { MerchantsService } from "../../database/services/merchants.service";
import { CurrentUser } from "../../utility/decorators/current.user";
import { Merchants } from "../../database/entities/merchants.entity";

@Controller('mp/merchants')
export class MerchantsController extends BaseController {
    constructor(
        private merchantsService: MerchantsService
    ) {
        super()
    }

    @Get('profile')
    async getProfile(@CurrentUser() merchant: any): Promise<any>{
        const result = await this.merchantsService.findOne(merchant.id, {select:['name','email','phone']});
        return { statusCode: 200, data: result };
    }

    @Post('profile')
    async updateProfile(@CurrentUser() merchant: any, @Body() merchants: Merchants): Promise<any>{
        const result = await this.merchantsService.update(merchant.id, merchants);
        return { statusCode: 201, data: result };
    }
}