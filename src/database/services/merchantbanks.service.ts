import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { Merchantbanks } from "../entities/merchantbanks.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MerchantbanksService extends BaseService<Merchantbanks> {
    constructor(@InjectRepository(Merchantbanks) private readonly merchantbanksRepository: Repository<Merchantbanks>){
        super(merchantbanksRepository)
    }
}