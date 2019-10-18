import { Controller } from '@nestjs/common';
import { InvoicesService } from '../services/invoices.service';
import { Invoices } from '../entities/invoices.entity';
import { BaseController } from './base.controller';

@Controller('sa/invoices')
export class InvoicesController extends BaseController<Invoices> {
    constructor(private readonly invoicesService: InvoicesService){
        super(invoicesService)
    }
}