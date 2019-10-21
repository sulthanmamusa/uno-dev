import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('subscriptions')
export class Subscriptions extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') product_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') customer_id: number;

}