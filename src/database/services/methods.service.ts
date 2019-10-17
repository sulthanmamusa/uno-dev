import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Methods } from '../entities/methods.entity';
import { BaseService } from './base.service';

@Injectable()
export class MethodsService extends BaseService<Methods>{
	constructor(@InjectRepository(Methods) private readonly methodsRepository: Repository<Methods>) {
		super(methodsRepository);
	}
}