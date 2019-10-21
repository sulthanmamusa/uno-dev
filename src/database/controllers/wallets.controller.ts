import { Controller, Post, Body } from '@nestjs/common';
import { WalletsService } from '../services/wallets.service';
import { Wallets } from '../entities/wallets.entity';
import { BaseController } from './base.controller';

@Controller('sa/wallets')
export class WalletsController extends BaseController<Wallets> {
    constructor(private readonly walletsService: WalletsService){
        super(walletsService)
    }

    @Post()
    async create(@Body() entity : Wallets): Promise<number | object>{
	    return await this.walletsService.create(entity);
    }
}