import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('roles')
export class Roles extends BaseEntity {
	@Column('varchar') name: string;

}