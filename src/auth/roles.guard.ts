import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    let roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles);console.log(roles);
    if (!roles) {
        roles = this.reflector.get<string[]>('roles', context.getClass());
        if (!roles) {
            return true;
        }
    }
    console.log(roles);
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some((role) => roles.includes(role));
    return user && user.roles && hasRole();
  }
}