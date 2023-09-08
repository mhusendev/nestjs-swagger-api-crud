import { ApiProperty } from "@nestjsx/crud/lib/crud";

export class CreateUser {
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    lastName:string;
    @ApiProperty()
    isActive:boolean;


}