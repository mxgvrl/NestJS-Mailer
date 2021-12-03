import { join } from 'path';

// require('dotenv').config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'rosalia.batz11@ethereal.email',
          pass: 'seTZwjWAY7B3SVFpMH',
        },
      },
      defaults: {
        from: '"Mailer Test" <rosalia.batz11@ethereal.email>',
      },
      template: {
        dir: join(__dirname, './template'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
