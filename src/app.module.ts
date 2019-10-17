import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule, HandlebarsAdapter } from '@nest-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MerchantApiModule } from './merchant-api/merchant-api.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService): Promise<any> => ({
        type: config.get('DB_TYPE'),
        host: config.get('DB_HOST'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: true
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
       useFactory: async (config: ConfigService) => ({
         transport: config.get('MAILER_TRANSPORT'),
         defaults: {
          from:'"sulthan" <sulthanprovab@gmail.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        }
       }),
       inject: [ConfigService]
    }),
    DatabaseModule,
    AuthModule,
    ConfigModule,
    MerchantApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
