import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('transactions')
export class Transactions extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('decimal') amount: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') customer_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') types: string;

}