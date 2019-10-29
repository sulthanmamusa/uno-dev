import { Controller } from "@nestjs/common";
import { BaseController } from "./base.controller";

@Controller('mp/refunds')
export class RefundsController extends BaseController {
    constructor(){
        super()
    }
}