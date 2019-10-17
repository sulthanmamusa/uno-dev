import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('refunds')
export class Refunds extends BaseEntity {
	@Column('int') order_id: number;
	@Column('decimal') amount: string;
	@Column('datetime') requesteddate: string;
	@Column('tinyint') refundstatus: boolean;
	@Column('datetime') refundeddate: string;
	@Column('decimal') totalamount: string;

}