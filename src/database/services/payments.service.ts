import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payments } from '../entities/payments.entity';
import { BaseService } from './base.service';

@Injectable()
export class PaymentsService extends BaseService<Payments>{
	constructor(@InjectRepository(Payments) private readonly paymentsRepository: Repository<Payments>) {
		super(paymentsRepository);
	}
}