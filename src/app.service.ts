import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <a href="/auth-api-docs">Authentication Api Documentation</a>
    <br/><br/>
    <a href="/super-admin-api-docs">Super Admin Api Documentation</a>
    <br/><br/>
    <a href="/admin-api-docs">Admin Panel Api Documentation</a>
    <br/><br/>
    <a href="/merchant-api-docs">Merchant Panel Api Documentation</a>
    <br/><br/>
    <a href="/pg-api-docs">Payment Gateway Api Documentation</a>
    `;
  }
}
