import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('plugins')
export class Plugins extends BaseEntity {
	@Column('varchar') title: string;
	@Column('varchar') descriptions: string;

}