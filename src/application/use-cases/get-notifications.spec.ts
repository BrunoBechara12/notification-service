import { makeNotification } from '../../../test/factories/notification-factory';
import { inMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetNotification } from './get-notifications';

describe('Get notifications', () => {
  it('Should be able to get notifications', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const getNotification = new GetNotification(notificationRepository);

    await notificationRepository.create(makeNotification());

    await notificationRepository.create(makeNotification());

    const { notifications } = await getNotification.execute();

    expect(notifications).toHaveLength(2);
  });
});
