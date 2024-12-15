import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { Notification } from '../entities/notification';

interface GetNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(): Promise<GetNotificationsResponse> {
    const notifications = await this.notificationRepository.findMany();

    return {
      notifications,
    };
  }
}
