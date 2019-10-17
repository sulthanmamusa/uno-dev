import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('basic'))
@Controller()
export class BaseController {
    constructor(){}
}