import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const notification = await sendNotification.execute({
      content: 'Alguém visualizou seu perfil!',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
