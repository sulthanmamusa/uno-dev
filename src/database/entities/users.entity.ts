import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('users')
export class Users extends BaseEntity {
	@Column('varchar') name: string;
	@Column('varchar') email: string;
	@Column('varchar') phone: string;
	@Column('varchar') password: string;
	@Column('int') role_id: number;

}