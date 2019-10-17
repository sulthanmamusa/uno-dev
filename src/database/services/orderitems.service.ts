import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orderitems } from '../entities/orderitems.entity';
import { BaseService } from './base.service';

@Injectable()
export class OrderitemsService extends BaseService<Orderitems>{
	constructor(@InjectRepository(Orderitems) private readonly orderitemsRepository: Repository<Orderitems>) {
		super(orderitemsRepository);
	}
}