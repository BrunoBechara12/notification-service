import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CountRecipientNotification } from 'src/application/use-cases/count-recipient-notification';
import { GetRecipientNotification } from 'src/application/use-cases/get-recipient-notification';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { GetNotification } from 'src/application/use-cases/get-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
    GetNotification,
  ],
})
export class HttpModule {}
