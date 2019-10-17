import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('customerbanks')
export class Customerbanks extends BaseEntity {
	@Column('varchar') bankname: string;
	@Column('varchar') accountnumber: string;
	@Column('varchar') ifsc: string;
	@Column('int') customer_id: number;

}