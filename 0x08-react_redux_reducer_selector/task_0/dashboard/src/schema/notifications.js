import * as reduxNotification from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity(
  "message",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationData.default, [notification]);

export { normalizedData };

const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const message = normalizedData.entities.message;

  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(message[notifications[property].context]);
    }
  }
  return notificationsByUser;
};

export default getAllNotificationsByUser;
