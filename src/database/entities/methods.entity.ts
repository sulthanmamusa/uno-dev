import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('methods')
export class Methods extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') name: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') descriptions: string;

}