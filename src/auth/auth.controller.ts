import { Controller, Request, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReq } from './auth.swagger';
import { RegisterDto, ForgotPasswordDto, ResetPasswordDto } from './auth.validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
	async login(@Body() user: LoginReq): Promise<any> {
        const result = await this.authService.login(user.email, user.password);
        if(!result.access_token){
            throw new UnauthorizedException();
        }
		return { statusCode: 201, data: result };
	}

  @Post('register')
  async register(@Body() user: RegisterDto): Promise<any>{
    const result = await this.authService.register(user);
    return { statusCode: 201, data: result };
  }

  @Post('forgotPassword')
  async forgotPassword(@Body() body: ForgotPasswordDto): Promise<any>{
    const result = await this.authService.forgotPassword(body.email);
    return { statusCode: 201, data: result };
  }

  @Post('resetPassword')
  async resetPassword(@Body() body: ResetPasswordDto): Promise<any>{
    const result = await this.authService.resetPassword(body);
    return { statusCode: 201, data: result };
  }

}
