import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('orders')
export class Orders extends BaseEntity {
	@Column('varchar') ordernumber: string;
	@Column('datetime') orderdate: string;
	@Column('decimal') amount: string;
	@Column('int') customer_id: number;

}