import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() createdat: Date;
    @Column() modifiedat: Date;
    @Column() status: boolean;
}