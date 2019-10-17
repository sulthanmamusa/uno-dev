import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('subscriptions')
export class Subscriptions extends BaseEntity {
	@Column('int') product_id: number;
	@Column('int') customer_id: number;

}