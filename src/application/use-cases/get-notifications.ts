import { Injectable } from '@nestjs/common';
import { NotiticationRepository } from '../repositories/notification-repository';
import { Notification } from '../entities/notification';

interface GetNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetNotification {
  constructor(private notificationRepository: NotiticationRepository) {}

  async execute(): Promise<GetNotificationsResponse> {
    const notifications = await this.notificationRepository.findMany();

    return {
      notifications,
    };
  }
}
