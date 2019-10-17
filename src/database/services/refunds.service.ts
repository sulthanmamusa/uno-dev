import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refunds } from '../entities/refunds.entity';
import { BaseService } from './base.service';

@Injectable()
export class RefundsService extends BaseService<Refunds>{
	constructor(@InjectRepository(Refunds) private readonly refundsRepository: Repository<Refunds>) {
		super(refundsRepository);
	}
}