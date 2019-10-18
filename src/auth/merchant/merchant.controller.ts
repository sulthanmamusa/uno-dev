import { Controller, Post, Body } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { RegisterDto, ForgotPasswordDto, ResetPasswordDto, LoginDto } from './merchant.validator';

@Controller('auth/merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post('login')
  async login(@Body() merchant: LoginDto): Promise<any>{
    return this.merchantService.login(merchant.email, merchant.password);
  }

  @Post('register')
  async register(@Body() user: RegisterDto): Promise<any>{
    return this.merchantService.register(user);
  }

  @Post('forgotPassword')
  async forgotPassword(@Body() body: ForgotPasswordDto): Promise<any>{
    return this.merchantService.forgotPassword(body.email);
  }

  @Post('resetPassword')
  async resetPassword(@Body() body: ResetPasswordDto): Promise<any>{
    return this.merchantService.resetPassword(body);
  }

}
