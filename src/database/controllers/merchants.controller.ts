import { Controller } from '@nestjs/common';
import { MerchantsService } from '../services/merchants.service';
import { Merchants } from '../entities/merchants.entity';
import { BaseController } from './base.controller';

@Controller('sa/merchants')
export class MerchantsController extends BaseController<Merchants> {
    constructor(private readonly merchantsService: MerchantsService){
        super(merchantsService)
    }
}