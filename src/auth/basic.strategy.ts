import { PassportStrategy } from "@nestjs/passport";
import { BasicStrategy } from 'passport-http';
import { CredentialsService } from "../database/services/credentials.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BasicAuthStrategy extends PassportStrategy(BasicStrategy){
    constructor(private credentialsService: CredentialsService){
        super()
    }

    async validate(username: string, password: string){
        const credentials = await this.credentialsService.findAll({
            select:['merchant_id'],
            where:{
                keyid: username,
                secret: password
            }
        });
        if(Array.isArray(credentials) && credentials.length > 0){
            return { merchant_id: credentials[0]['merchant_id']};
        }
        return false;
    }
}