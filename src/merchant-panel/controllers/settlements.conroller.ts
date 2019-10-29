import { Controller } from "@nestjs/common";
import { BaseController } from "./base.controller";

@Controller('mp/settlements')
export class SettlementsController extends BaseController {
    constructor() {
        super()
    }
}