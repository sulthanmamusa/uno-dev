import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchants } from '../entities/merchants.entity';
import { BaseService } from './base.service';

@Injectable()
export class MerchantsService extends BaseService<Merchants>{
	constructor(@InjectRepository(Merchants) private readonly merchantsRepository: Repository<Merchants>) {
		super(merchantsRepository);
	}
}