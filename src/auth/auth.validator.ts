import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiModelProperty() @IsNotEmpty() name: string;
    @ApiModelProperty() @IsEmail() email: string;
    @ApiModelProperty() @IsNotEmpty() password: string;
}

export class ForgotPasswordDto {
    @ApiModelProperty() @IsEmail() email: string;
}

export class ResetPasswordDto {
    @ApiModelProperty() @IsNotEmpty() password: string;
    @ApiModelProperty() @IsNotEmpty() encdata: string;
}