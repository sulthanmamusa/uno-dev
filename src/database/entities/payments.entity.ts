import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('payments')
export class Payments extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') amount: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') currency: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('tinyint') paymentstatus: boolean;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') method_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') order_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') description: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') notes: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') fee: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') tax: string;

}