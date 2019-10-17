import { Controller } from '@nestjs/common';
import { SettlementsService } from '../services/settlements.service';
import { Settlements } from '../entities/settlements.entity';
import { BaseController } from './base.controller';

@Controller('sa/settlements')
export class SettlementsController extends BaseController<Settlements> {
    constructor(private readonly settlementsService: SettlementsService){
        super(settlementsService)
    }
}