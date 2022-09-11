import { IsNotEmpty, IsString } from 'class-validator'

export class BlogDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    phoneNumber: string
}
