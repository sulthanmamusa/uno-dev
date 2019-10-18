import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoices } from '../entities/invoices.entity';
import { BaseService } from './base.service';

@Injectable()
export class InvoicesService extends BaseService<Invoices>{
	constructor(@InjectRepository(Invoices) private readonly invoicesRepository: Repository<Invoices>) {
		super(invoicesRepository);
	}
}