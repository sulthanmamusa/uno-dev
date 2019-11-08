import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity('webhooks')
export class Webhooks extends BaseEntity {
    @ApiModelProperty()
    @IsNotEmpty()
    @Column() name: string;
}