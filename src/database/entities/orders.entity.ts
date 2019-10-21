import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('orders')
export class Orders extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') ordernumber: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('datetime') orderdate: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') amount: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') customer_id: number;

}