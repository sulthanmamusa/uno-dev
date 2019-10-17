import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('credentials')
export class Credentials extends BaseEntity {
	@Column('varchar') keyid: string;
	@Column('varchar') secret: string;
	@Column('int') merchant_id: number;

}