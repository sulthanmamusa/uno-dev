import { Controller, Post, Body } from '@nestjs/common';
import { CredentialsService } from '../services/credentials.service';
import { Credentials } from '../entities/credentials.entity';
import { BaseController } from './base.controller';

@Controller('sa/credentials')
export class CredentialsController extends BaseController<Credentials> {
    constructor(private readonly credentialsService: CredentialsService){
        super(credentialsService)
    }

    @Post()
    async create(@Body() entity : Credentials): Promise<number | object>{
        const result = await this.credentialsService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}