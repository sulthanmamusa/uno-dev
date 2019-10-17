import { Controller } from '@nestjs/common';
import { ConstantsService } from '../services/constants.service';
import { Constants } from '../entities/constants.entity';
import { BaseController } from './base.controller';

@Controller('sa/constants')
export class ConstantsController extends BaseController<Constants> {
    constructor(private readonly constantsService: ConstantsService){
        super(constantsService)
    }
}
