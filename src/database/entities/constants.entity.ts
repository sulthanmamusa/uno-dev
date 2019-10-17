import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('constants')
export class Constants extends BaseEntity {
	@Column('varchar') name: string;
	@Column('varchar') value: string;

}