import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('invoices')
export class Invoices extends BaseEntity {
	@Column('varchar') currency: string;
	@Column('int') order_id: number;
	@Column('varchar') description: string;
	@Column('varchar') invoicedate: string;
	@Column('decimal') terms: string;
	@Column('decimal') draft: boolean;
}