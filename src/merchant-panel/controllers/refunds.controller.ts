import { Controller, Get } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { CurrentUser } from "../../utility/decorators/current.user";
import { In } from "typeorm";
import { OrdersService } from "../../database/services/orders.service";
import { PaymentsService } from "../../database/services/payments.service";

@Controller('mp/refunds')
export class RefundsController extends BaseController {
    constructor(
        private ordersService: OrdersService,
        private paymentsService: PaymentsService
    ){
        super()
    }

    @Get()
    async findAll(@CurrentUser() merchant: any): Promise<any> {
        const orderIds = await this.ordersService.findAll({where:{merchant_id: merchant.id},select:['id']});
        if(Array.isArray(orderIds) && orderIds.length){
            const payments = await this.paymentsService.findAll({where:{id: In(orderIds)}});
            return { statusCode: 200, data: payments }
        }
        return { statusCode: 200, data: [] }
    }
}