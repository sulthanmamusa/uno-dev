import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity('request_categories')
export class RequestCategories extends BaseEntity {
    @ApiModelProperty()
    @IsNotEmpty()
    @Column() name: string;
}