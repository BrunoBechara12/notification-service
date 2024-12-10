import { Notification } from '../entities/notification';

export abstract class NotiticationRepository {
  abstract create(notification: Notification): Promise<void>;
}
