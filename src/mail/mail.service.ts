import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendPlainText(): void {
    this.mailerService
      .sendMail({
        to: 'mxgvrl@gmail.com',
        from: 'rosalia.batz11@ethereal.email',
        subject: 'Testing Nest MailerModule ✔',
        text: 'welcome',
        html: '<b>welcome</b>',
      })
      .then((success) => {
        return console.log(success);
      })
      .catch((error) => {
        return console.log(error);
      });
  }

  public sendHTML(): void {
    this.mailerService
      .sendMail({
        to: 'mxgvrl@gmail.com',
        from: 'rosalia.batz11@ethereal.email',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: __dirname + '/template/mail-body',
        context: {
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
