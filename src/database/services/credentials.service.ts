import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credentials } from '../entities/credentials.entity';
import { BaseService } from './base.service';

@Injectable()
export class CredentialsService extends BaseService<Credentials>{
	constructor(@InjectRepository(Credentials) private readonly credentialsRepository: Repository<Credentials>) {
		super(credentialsRepository);
	}
}