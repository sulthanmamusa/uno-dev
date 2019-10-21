//import * as helmet from 'helmet';
//import * as csurf from 'csurf';
//import * as rateLimit from 'express-rate-limit';
//import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ValidationPipe } from '@nestjs/common';
import { MerchantPanelModule } from './merchant-panel/merchant-panel.module';
import { MerchantApiModule } from './merchant-api/merchant-api.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(helmet());
  //app.enableCors();
  //app.use(csurf());
  //app.use(rateLimit({windowMs: 15 * 60 * 1000, max: 100}));
  //app.use(compression());

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
  //.addBearerAuth('Authorization', 'header')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options, {include:[DatabaseModule]});
  SwaggerModule.setup('admin-api-docs', app, document);

  const document2 = SwaggerModule.createDocument(app, options, {include:[AuthModule]});
  SwaggerModule.setup('auth-api-docs', app, document2);

  const document3 = SwaggerModule.createDocument(app, options, {include:[MerchantPanelModule]});
  SwaggerModule.setup('merchant-api-docs', app, document3);

  const document4 = SwaggerModule.createDocument(app, options, {include:[MerchantApiModule]});
  SwaggerModule.setup('pg-api-docs', app, document4);

  await app.listen(PORT);
}
bootstrap();
