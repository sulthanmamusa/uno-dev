import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { RegisterDto, ForgotPasswordDto, ResetPasswordDto, LoginDto } from './merchant.validator';

@Controller('auth/merchant')
export class MerchantController {
	constructor(private readonly merchantService: MerchantService) { }

	@Post('login')
	async login(@Body() merchant: LoginDto): Promise<any> {
        const result = await this.merchantService.login(merchant.email, merchant.password);
        if(!result.access_token){
            throw new UnauthorizedException();
        }
		return { statusCode: 201, data: result };
	}

	@Post('register')
	async register(@Body() user: RegisterDto): Promise<any> {
		const result = await this.merchantService.register(user);
		return { statusCode: 201, data: result };
	}

	@Post('forgotPassword')
	async forgotPassword(@Body() body: ForgotPasswordDto): Promise<any> {
		const result = await this.merchantService.forgotPassword(body.email);
		return { statusCode: 201, data: result };
	}

	@Post('resetPassword')
	async resetPassword(@Body() body: ResetPasswordDto): Promise<any> {
		const result = await this.merchantService.resetPassword(body);
		return { statusCode: 201, data: result };
	}

}
