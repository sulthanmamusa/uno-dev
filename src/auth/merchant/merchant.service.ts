import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nest-modules/mailer';
import { EncryptDecrypt } from '../../utility/encrypt.decrypt';
import { MerchantsService } from '../../database/services/merchants.service';

@Injectable()
export class MerchantService {
  constructor(
    private readonly merchantsService: MerchantsService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async login(username: string, password: string) {
    const merchant = await this.merchantsService.findAll({where:{email: username},select:['id','email','password','role_id']});
    if(Array.isArray(merchant)){
      if (merchant.length > 0 && merchant[0].password === password) {
        const payload = { email: username, id: merchant[0].id, roles: 'merchant' };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    }
    return false;
  }

  async register(merchant: any): Promise<any>{
    return this.merchantsService.create(merchant);
  }

  async forgotPassword(email: string): Promise<any>{
    const user = await this.merchantsService.findAll({where:{email},select:['id']});
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
    return await this.merchantsService.update({email},{password: body['password']});
  }

}
