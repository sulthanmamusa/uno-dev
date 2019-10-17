import { Controller } from '@nestjs/common';
import { FaqsService } from '../services/faqs.service';
import { Faqs } from '../entities/faqs.entity';
import { BaseController } from './base.controller';

@Controller('sa/faqs')
export class FaqsController extends BaseController<Faqs> {
    constructor(private readonly faqsService: FaqsService){
        super(faqsService)
    }
}