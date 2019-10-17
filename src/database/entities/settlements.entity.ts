import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('settlements')
export class Settlements extends BaseEntity {
	@Column('decimal') amount: string;
	@Column('int') customerbank_id: number;

}