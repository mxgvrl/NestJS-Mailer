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
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'rosalia.batz11@ethereal.email', // generated ethereal user
          pass: 'seTZwjWAY7B3SVFpMH', // generated ethereal password
        },
      },
      defaults: {
        from: '"Mailer Test" <rosalia.batz11@ethereal.email>', // outgoing email ID
      },
      template: {
        dir: join(__dirname, './template'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
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
