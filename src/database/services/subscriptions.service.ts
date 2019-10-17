import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriptions } from '../entities/subscriptions.entity';
import { BaseService } from './base.service';

@Injectable()
export class SubscriptionsService extends BaseService<Subscriptions>{
	constructor(@InjectRepository(Subscriptions) private readonly subscriptionsRepository: Repository<Subscriptions>) {
		super(subscriptionsRepository);
	}
}