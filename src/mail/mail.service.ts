import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../user/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendPlainText() {
    await this.mailerService.sendMail({
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: 'NestJS MailerApp',
      text: 'That is a plain text',
      html: '<b>That is HTML</b>',
    });
  }

  public async sendHTML(user?: User) {
    await this.mailerService.sendMail({
      to: user.email,
      from: process.env.SENDER_EMAIL,
      subject: 'NestJS MailerApp (with template)',
      template: __dirname + '/template/mail-body',
      context: {
        code: user.accessToken.slice(0, 10),
        username: `${user.firstName} ${user.lastName}`,
      },
    });
  }
}
