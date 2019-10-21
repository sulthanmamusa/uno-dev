import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('customerbanks')
export class Customerbanks extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') bankname: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') accountnumber: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') ifsc: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') customer_id: number;

}