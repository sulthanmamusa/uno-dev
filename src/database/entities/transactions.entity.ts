import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('transactions')
export class Transactions extends BaseEntity {
	@Column('decimal') amount: string;
	@Column('int') customer_id: number;
	@Column('varchar') types: string;

}