import { Injectable } from '@nestjs/common';
import { UsersService } from '../database/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../database/services/roles.service';
import { MailerService } from '@nest-modules/mailer';
import { EncryptDecrypt } from '../utility/encrypt.decrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findAll({where:{email: username},select:['id','email','password']});
    if(Array.isArray(user)){
      if (user.length > 0 && user[0].password === password) {
        const role = await this.rolesService.findOne(user[0]['role_id']);
        const payload = { email: username, id: user[0].id, roles: role['name'] };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    }
    return { success: false, message: 'username and/or password is wrong!' };
  }

  async register(user: any): Promise<any>{
    return this.usersService.create(user);
  }

  async forgotPassword(email: string): Promise<any>{
    const user = await this.usersService.findAll({where:{email},select:['id']});
    if(Array.isArray(user)){
      if (user.length) {
        const encData = EncryptDecrypt.encrypt(Buffer.from(email));
        const encrypted = encData.toString('base64');
        try {
          const result = await this.mailerService.sendMail({
            to: email,
            from: 'sulthanprovab@gmail.com',
            subject: 'Forgot Password',
            text: 'Forgot Password link to reset password',
            html: `<a href="http://localhost:4200/reset/${encrypted}">Click Here</a>`
          });
          console.log(result);
          return {success: true, message:'reset password link sent to your email address!'}
        } catch (error) {
          console.log(JSON.stringify(error, null, '....'));
          return {success: false, message:'something went wrong!'}
        }
      }
    }
    return null;
  }

  async resetPassword(body: object): Promise<any>{
    const encData = Buffer.from(body['encdata'],'base64');
    const email = EncryptDecrypt.decrypt(encData).toString();
    return await this.usersService.update({email},{password: body['password']});
  }

}
