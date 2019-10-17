import { Controller } from '@nestjs/common';
import { PaymentsService } from '../services/payments.service';
import { Payments } from '../entities/payments.entity';
import { BaseController } from './base.controller';

@Controller('sa/payments')
export class PaymentsController extends BaseController<Payments> {
    constructor(private readonly paymentsService: PaymentsService){
        super(paymentsService)
    }
}