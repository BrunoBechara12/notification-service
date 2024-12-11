import { Notification } from '../../application/entities/notification';
import { NotiticationRepository } from 'src/application/repositories/notification-repository';

export class inMemoryNotificationRepository implements NotiticationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
