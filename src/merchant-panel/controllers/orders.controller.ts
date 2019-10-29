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
        const orders = await this.ordersService.findAll({where:{merchant_id: merchant.id}, select: ['id','ordernumber','orderdate','amount']});
        if(Array.isArray(orders) && orders.length){
            return { statusCode: 200, data: orders }
        }
        return { statusCode: 200, data: 'There is no order!' }
    }
}