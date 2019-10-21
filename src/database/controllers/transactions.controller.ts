import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { Transactions } from '../entities/transactions.entity';
import { BaseController } from './base.controller';

@Controller('sa/transactions')
export class TransactionsController extends BaseController<Transactions> {
    constructor(private readonly transactionsService: TransactionsService){
        super(transactionsService)
    }

    @Post()
    async create(@Body() entity : Transactions): Promise<number | object>{
        const result = await this.transactionsService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}