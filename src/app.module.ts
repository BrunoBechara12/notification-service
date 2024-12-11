import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { NotificationsController } from './infra/http/controllers/notifications.controller';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [],
})
export class AppModule {}
