import fetcher from "../libs/fetcher";
import IUser from "@repo/interfaces/models/user";

export default {
  fetchUser: async (): Promise<any> => {
    return fetcher("/api/fetch-user-data");
  },
  updateUser: async (user: IUser): Promise<any> => {
    return fetcher("/api/update-user-data", {
      method: "PUT",
      body: JSON.stringify(user),
    });
  },
};
