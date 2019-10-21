import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('merchants')
export class Merchants extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') name: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') email: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') phone: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') password: string;

}