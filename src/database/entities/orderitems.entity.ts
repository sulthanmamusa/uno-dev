import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('orderitems')
export class Orderitems extends BaseEntity {
	@Column('int') order_id: number;
	@Column('varchar') title: string;
	@Column('decimal') amount: string;
	@Column('smallint') quantity: string;
	@Column('decimal') totalamount: string;

}