import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiImplicitBody } from '@nestjs/swagger';
import { LoginReq } from './auth.swagger';
import { RegisterDto, ForgotPasswordDto, ResetPasswordDto } from './auth.validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiImplicitBody({name:'login',type:LoginReq, required:true})
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    const result = await this.authService.login(req.user);
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
