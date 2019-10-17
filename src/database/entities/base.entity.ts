import { PrimaryGeneratedColumn, Column  } from 'typeorm';
import { IsDate, IsBoolean } from "class-validator";
export class BaseEntity {
	@PrimaryGeneratedColumn() id: number;
	@IsDate()
	@Column() createdat: Date;
	@IsDate()
	@Column() modifiedat: Date;
	@IsBoolean()
	@Column() status: boolean;
}