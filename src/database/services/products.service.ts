import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entities/products.entity';
import { BaseService } from './base.service';

@Injectable()
export class ProductsService extends BaseService<Products>{
	constructor(@InjectRepository(Products) private readonly productsRepository: Repository<Products>) {
		super(productsRepository);
	}
}