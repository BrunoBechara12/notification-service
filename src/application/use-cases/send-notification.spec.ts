import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', () => {
    const sendNotification = new SendNotification();

    const notification = sendNotification.execute({
      content: 'Alguém visualizou seu perfil!',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
