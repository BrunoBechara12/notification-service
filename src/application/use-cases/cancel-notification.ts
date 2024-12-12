import { Injectable } from '@nestjs/common';
import { NotiticationRepository } from '../repositories/notification-repository';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotiticationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}
