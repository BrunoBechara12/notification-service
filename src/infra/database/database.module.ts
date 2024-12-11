import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification-repository';
import { NotiticationRepository } from 'src/application/repositories/notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotiticationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotiticationRepository],
})
export class DatabaseModule {}
