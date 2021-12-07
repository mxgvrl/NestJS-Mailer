import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MailModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, GoogleStrategy, AuthService],
})
export class AppModule {}
