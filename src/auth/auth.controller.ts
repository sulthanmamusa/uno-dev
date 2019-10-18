import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiImplicitBody } from '@nestjs/swagger';
import { LoginReq } from './auth.swagger';
import { RegisterDto, ForgotPasswordDto, ResetPasswordDto, LoginDto } from './auth.validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiImplicitBody({name:'login',type:LoginReq, required:true})
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() user: RegisterDto): Promise<any>{
    return this.authService.register(user);
  }

  @Post('forgotPassword')
  async forgotPassword(@Body() body: ForgotPasswordDto): Promise<any>{
    return this.authService.forgotPassword(body.email);
  }

  @Post('resetPassword')
  async resetPassword(@Body() body: ResetPasswordDto): Promise<any>{
    return this.authService.resetPassword(body);
  }

}
