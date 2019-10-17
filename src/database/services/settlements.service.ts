import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settlements } from '../entities/settlements.entity';
import { BaseService } from './base.service';

@Injectable()
export class SettlementsService extends BaseService<Settlements>{
	constructor(@InjectRepository(Settlements) private readonly settlementsRepository: Repository<Settlements>) {
		super(settlementsRepository);
	}
}