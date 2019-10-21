import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Users } from '../entities/users.entity';
import { BaseController } from './base.controller';

@Controller('sa/users')
export class UsersController extends BaseController<Users> {
    constructor(private readonly usersService: UsersService){
        super(usersService)
    }

    @Post()
    async create(@Body() entity : Users): Promise<number | object>{
	    return await this.usersService.create(entity);
    }
}