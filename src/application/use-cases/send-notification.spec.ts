import { inMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'Alguém visualizou seu perfil!',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
