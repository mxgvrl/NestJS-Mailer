import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(private mailService: MailService) {}

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    this.mailService.sendHTML(req.user);
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
