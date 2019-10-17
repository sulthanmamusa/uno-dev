import * as crypto from 'crypto';

export class EncryptDecrypt {
    static algorithm = 'aes-256-ctr';
    static secret = 'MySuperSecretKey';
    static key = crypto.createHash('sha256')
    .update(String(EncryptDecrypt.secret))
    .digest('base64')
    .substr(0, 32);
    static iv = crypto.randomBytes(16);

    static encrypt(buffer) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
        const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
        return result;
    };
    
    static decrypt(encrypted) {
       const iv = encrypted.slice(0, 16);
       encrypted = encrypted.slice(16);
       const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
       const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
       return result;
    };
}