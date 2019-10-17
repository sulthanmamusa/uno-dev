import { Controller } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Products } from '../entities/products.entity';
import { BaseController } from './base.controller';

@Controller('sa/products')
export class ProductsController extends BaseController<Products> {
    constructor(private readonly productsService: ProductsService){
        super(productsService)
    }
}