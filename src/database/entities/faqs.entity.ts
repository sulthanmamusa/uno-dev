import { Entity, Column } from 'typeorm';
import {  } from "class-validator";
import { BaseEntity } from './base.entity';

@Entity('faqs')
export class Faqs extends BaseEntity {
	@Column('varchar') title: string;
	@Column('varchar') descriptions: string;

}