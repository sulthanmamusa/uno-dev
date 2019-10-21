import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('invoices')
export class Invoices extends BaseEntity {

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') currency: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('int') order_id: number;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') description: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('datetime') invoicedate: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('varchar') terms: string;

	@ApiModelProperty()
	@IsNotEmpty()
	@Column('tinyint') draft: boolean;

}