import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faqs } from '../entities/faqs.entity';
import { BaseService } from './base.service';

@Injectable()
export class FaqsService extends BaseService<Faqs>{
	constructor(@InjectRepository(Faqs) private readonly faqsRepository: Repository<Faqs>) {
		super(faqsRepository);
	}
}