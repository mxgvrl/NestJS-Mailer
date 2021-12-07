import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../google.strategy';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [MailModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, MailService],
})
export class AuthModule {}
