import { Controller, Get, Post } from "@nestjs/common";
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
        return await this.merchantsService.findOne(merchant.id, {select:['name','email','phone']});
    }

    @Post('profile')
    async updateProfile(@CurrentUser() merchant: any, merchants: Merchants): Promise<any>{
        return await this.merchantsService.update(merchant.id, merchants);
    }
}