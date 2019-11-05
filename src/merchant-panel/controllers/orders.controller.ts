import { Controller, Get } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { CurrentUser } from "../../utility/decorators/current.user";
import { OrdersService } from "../../database/services/orders.service";

@Controller('mp/orders')
export class OrdersController extends BaseController {
    constructor(
        private ordersService: OrdersService
    ) {
        super()
    }

    @Get()
    async getOrders(@CurrentUser() merchant: any):Promise<any> {
        const result = await this.ordersService.findAll({where:{merchant_id: merchant.id}, select: ['id','ordernumber','orderdate','amount']});
        return { statusCode: 200, data: result }
    }
}