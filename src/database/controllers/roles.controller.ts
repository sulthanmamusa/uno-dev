import { Controller } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { Roles } from '../entities/roles.entity';
import { BaseController } from './base.controller';

@Controller('sa/roles')
export class RolesController extends BaseController<Roles> {
    constructor(private readonly rolesService: RolesService){
        super(rolesService)
    }
}