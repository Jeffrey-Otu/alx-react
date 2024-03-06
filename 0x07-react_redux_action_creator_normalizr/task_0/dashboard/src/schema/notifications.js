import * as reduxNotification from "../../notifications.json";

const getAllNotificationsByUser = (userId) => {
  return reduxNotification.default
    .filter((contextObj) => contextObj.author.id === userId)
    .map(({ context }) => context);
};

export default getAllNotificationsByUser;
