import { BaseController } from "./base.controller";
import { Controller, Get } from "@nestjs/common";
import { CurrentUser } from "../../utility/decorators/current.user";
import { OrdersService } from "../../database/services/orders.service";
import { PaymentsService } from "../../database/services/payments.service";
import { In } from "typeorm";

@Controller('mp/payments')
export class PaymentsController extends BaseController {
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