import { Entity, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity('credentials')
export class Credentials extends BaseEntity {

    @ApiModelProperty()
    @IsNotEmpty()
    @Column('varchar') keyid: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column('varchar') secret: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @Column('int') merchant_id: number;

}