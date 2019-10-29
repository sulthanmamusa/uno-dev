import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity('merchantbanks')
export class Merchantbanks extends BaseEntity {
    @ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') bankname: string;

	@ApiModelProperty()
	@IsNotEmpty()
    @Column('varchar') accountnumber: string;
    
    @ApiModelProperty()
	@IsNotEmpty()
    @Column('varchar') accountname: string;
    
    @ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') accounttype: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') ifsc: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') merchant_id: number;
}