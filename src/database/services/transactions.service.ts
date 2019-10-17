import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from '../entities/transactions.entity';
import { BaseService } from './base.service';

@Injectable()
export class TransactionsService extends BaseService<Transactions>{
	constructor(@InjectRepository(Transactions) private readonly transactionsRepository: Repository<Transactions>) {
		super(transactionsRepository);
	}
}