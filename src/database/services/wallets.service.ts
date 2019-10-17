import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallets } from '../entities/wallets.entity';
import { BaseService } from './base.service';

@Injectable()
export class WalletsService extends BaseService<Wallets>{
	constructor(@InjectRepository(Wallets) private readonly walletsRepository: Repository<Wallets>) {
		super(walletsRepository);
	}
}