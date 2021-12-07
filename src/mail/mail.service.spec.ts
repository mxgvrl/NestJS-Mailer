import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';
import { MailerService } from '@nestjs-modules/mailer';

describe('MailService', () => {
  let mailService: MailService;
  let mailerService: MailerService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: MailerService,
      useFactory: () => ({
        sendMail: jest.fn(() => []),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      providers: [MailService, ApiServiceProvider],
    }).compile();
    mailService = app.get<MailService>(MailService);
    mailerService = app.get<MailerService>(MailerService);
  });

  it('calling sendPlainText method', () => {
    mailService.sendPlainText();
    expect(mailerService.sendMail).toHaveBeenCalled();
  });

  it('calling sendHTML method', () => {
    mailService.sendHTML();
    expect(mailerService.sendMail).toHaveBeenCalled();
  });
});
