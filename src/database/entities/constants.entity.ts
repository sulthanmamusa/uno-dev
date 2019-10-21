import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('constants')
export class Constants extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') name: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') value: string;

}