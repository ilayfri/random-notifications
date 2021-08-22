import { DBRequest } from "../genericRequest";
export const createUser = async () => {
  try {
    return DBRequest(
      "POST",
      { "Content-Type": "application/json" },
      {},
      "createUser"
    );
  } catch (err) {
    throw err;
  }
};
