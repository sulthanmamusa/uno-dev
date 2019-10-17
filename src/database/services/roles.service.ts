import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from '../entities/roles.entity';
import { BaseService } from './base.service';

@Injectable()
export class RolesService extends BaseService<Roles>{
	constructor(@InjectRepository(Roles) private readonly rolesRepository: Repository<Roles>) {
		super(rolesRepository);
	}
}