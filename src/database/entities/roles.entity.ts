import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('roles')
export class Roles extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') name: string;

}