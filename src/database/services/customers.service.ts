import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from '../entities/customers.entity';
import { BaseService } from './base.service';

@Injectable()
export class CustomersService extends BaseService<Customers>{
	constructor(@InjectRepository(Customers) private readonly customersRepository: Repository<Customers>) {
		super(customersRepository);
	}
}