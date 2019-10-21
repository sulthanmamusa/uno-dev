import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('orderitems')
export class Orderitems extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') order_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') title: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') amount: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('smallint') quantity: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') totalamount: string;

}