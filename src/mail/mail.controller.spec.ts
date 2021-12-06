import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

describe('MailController', () => {
  let mailController: MailController;
  let mailService: MailService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: MailService,
      useFactory: () => ({
        sendPlainText: jest.fn(() => []),
        sendHTML: jest.fn(() => []),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailController],
      providers: [MailService, ApiServiceProvider],
    }).compile();
    mailController = app.get<MailController>(MailController);
    mailService = app.get<MailService>(MailService);
  });

  it('calling sendPlainText method', () => {
    mailController.sendPlainText();
    expect(mailService.sendPlainText).toHaveBeenCalled();
  });

  it('calling sendTemplate method', () => {
    mailController.sendTemplate();
    expect(mailService.sendHTML).toHaveBeenCalled();
  });
});
