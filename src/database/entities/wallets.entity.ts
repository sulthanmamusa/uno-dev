import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('wallets')
export class Wallets extends BaseEntity {
	@Column('decimal') amount: string;
	@Column('int') customer_id: number;

}