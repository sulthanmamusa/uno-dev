import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('plugins')
export class Plugins extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') title: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') descriptions: string;

}