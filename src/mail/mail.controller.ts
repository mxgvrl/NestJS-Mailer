import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  sendPlainText() {
    return this.mailService.sendPlainText();
  }

  @Get('template')
  sendTemplate() {
    return this.mailService.sendHTML();
  }
}
