import { DBRequest } from "../genericRequest"
export const getNextNotification = async (
  currNotificationId = "",
  currUserId
) => {
  try {
    return DBRequest(
      "POST",
      { "Content-Type": "application/json" },
      { currNotificationId: currNotificationId, currUserId: currUserId },
      "getRandomNotification"
    );
  } catch (err) {
    throw err;
  }
};

export const markNotification = async (markedNotificationId, currUserId) => {
  try {
    return DBRequest(
      "POST",
      { "Content-Type": "application/json" },
      { markedNotificationId: markedNotificationId, currUserId: currUserId },
      "markNotification"
    );
  } catch (err) {
    throw err;
  }
};
