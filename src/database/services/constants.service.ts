import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Constants } from '../entities/constants.entity';
import { BaseService } from './base.service';

@Injectable()
export class ConstantsService extends BaseService<Constants>{
	constructor(@InjectRepository(Constants) private readonly constantsRepository: Repository<Constants>) {
		super(constantsRepository);
	}
}