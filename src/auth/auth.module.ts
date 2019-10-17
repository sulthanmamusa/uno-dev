import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { DatabaseModule } from '../database/database.module';
import { LocalStrategy } from './local.strategy';
import { BasicAuthStrategy } from './basic.strategy';

@Module({
  imports:[
    forwardRef(() => DatabaseModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, BasicAuthStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
