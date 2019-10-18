import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../../auth/roles.guard";
import { Roles } from "../../auth/roles.decorator";

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('merchant')
@Controller()
export class BaseController {
    constructor(){}
}