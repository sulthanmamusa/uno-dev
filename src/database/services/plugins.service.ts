import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plugins } from '../entities/plugins.entity';
import { BaseService } from './base.service';

@Injectable()
export class PluginsService extends BaseService<Plugins>{
	constructor(@InjectRepository(Plugins) private readonly pluginsRepository: Repository<Plugins>) {
		super(pluginsRepository);
	}
}