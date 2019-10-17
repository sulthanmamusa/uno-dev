import { Controller } from '@nestjs/common';
import { CustomerbanksService } from '../services/customerbanks.service';
import { Customerbanks } from '../entities/customerbanks.entity';
import { BaseController } from './base.controller';

@Controller('sa/customerbanks')
export class CustomerbanksController extends BaseController<Customerbanks> {
    constructor(private readonly customerbanksService: CustomerbanksService){
        super(customerbanksService)
    }
}