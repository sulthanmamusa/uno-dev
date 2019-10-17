import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from '../entities/orders.entity';
import { BaseService } from './base.service';

@Injectable()
export class OrdersService extends BaseService<Orders>{
	constructor(@InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>) {
		super(ordersRepository);
	}
}