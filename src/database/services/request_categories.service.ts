import { BaseService } from "./base.service";
import { RequestCategories } from '../entities/request_categories.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RequestCategoriesServices extends BaseService<RequestCategories> {
    constructor(
        @InjectRepository(RequestCategories)
        private requestCategoriesRepositry: Repository<RequestCategories>){
        super(requestCategoriesRepositry);
    }
}