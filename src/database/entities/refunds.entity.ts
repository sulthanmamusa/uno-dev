import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('refunds')
export class Refunds extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') order_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') amount: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('datetime') requesteddate: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('tinyint') refundstatus: boolean;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('datetime') refundeddate: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') totalamount: string;

}