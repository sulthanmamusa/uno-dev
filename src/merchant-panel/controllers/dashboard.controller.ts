import { Controller, Get } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('mp/dashboard')
export class DashboardController extends BaseController {
    constructor(){
        super()
    }

    @Get()
    async dashboard(): Promise<any>{
        return 'Dashboard details!';
    }
}
