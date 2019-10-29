import { Controller, Post, Body } from "@nestjs/common";
import { BaseController } from "./base.controller";
import { Merchantbanks } from "../entities/merchantbanks.entity";
import { MerchantbanksService } from "../services/merchantbanks.service";

@Controller('sa/merchantbanks')
export class MerchantbanksController extends BaseController<Merchantbanks>{
    constructor(private merchantbanksService: MerchantbanksService){
        super(merchantbanksService)
    }

    @Post()
    async create(@Body() entity : Merchantbanks): Promise<number | object>{
        const result = await this.merchantbanksService.create(entity);
        return { statusCode: 201, data: {id: result} };
    }
}