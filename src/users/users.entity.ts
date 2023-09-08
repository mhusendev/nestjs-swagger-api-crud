import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjsx/crud/lib/crud";
@Entity('users')
export class Users {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty()
    @Column()
    firstName:string;
    @ApiProperty()
    @Column()
    lastName:string;
    @ApiProperty()
    @Column({default:false})
    isActive: boolean;
}