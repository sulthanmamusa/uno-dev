import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('payments')
export class Payments extends BaseEntity {
	@Column('decimal') amount: string;
	@Column('varchar') currency: string;
	@Column('tinyint') paymentstatus: boolean;
	@Column('int') method_id: number;
	@Column('int') order_id: number;
	@Column('varchar') description: string;
	@Column('varchar') notes: string;
	@Column('decimal') fee: string;
	@Column('decimal') tax: string;

}