import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../../auth/roles.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller()
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class BaseController {
    constructor(){}
}