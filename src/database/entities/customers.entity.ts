import { Entity, Column } from 'typeorm';
import { IsNotEmpty } from "class-validator";
import { BaseEntity } from './base.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('customers')
export class Customers extends BaseEntity {
	@Column('varchar') 
	@ApiModelProperty()
	@IsNotEmpty()
	name: string;

	@Column('varchar') 
	@ApiModelProperty()
	@IsNotEmpty()
	email: string;
	
	@Column('varchar') phone: string;
	@Column('varchar') password: string;

}