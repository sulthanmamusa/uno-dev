import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity('service_requests')
export class ServiceRequests extends BaseEntity {
    @ApiModelProperty()
    @IsNotEmpty()
    @Column() merchant_id: number;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() request_category_id: number;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() request_source_id: number;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() subject: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() message: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() is_approved: boolean;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column() is_closed: boolean;
}