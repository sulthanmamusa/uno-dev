import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('methods')
export class Methods extends BaseEntity {
	@Column('varchar') name: string;
	@Column('varchar') descriptions: string;

}