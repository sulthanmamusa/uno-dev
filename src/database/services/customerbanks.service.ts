import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customerbanks } from '../entities/customerbanks.entity';
import { BaseService } from './base.service';

@Injectable()
export class CustomerbanksService extends BaseService<Customerbanks>{
	constructor(@InjectRepository(Customerbanks) private readonly customerbanksRepository: Repository<Customerbanks>) {
		super(customerbanksRepository);
	}
}