import { db } from "../config/firebaseConfig";
import { IUser } from "../entities/user";

export const userCollection = {
  update: async (userId: string, userData: Partial<IUser>) => {
    await db.collection("USERS").doc(userId).set(userData, { merge: true });
  },

  fetch: async () => {
    // Reference to the USERS collection
    const usersCollection = db.collection("USERS");

    // Fetch all documents in the USERS collection
    const usersSnapshot = await usersCollection.get();

    // Create an array to hold user data
    const users: IUser[] = [];

    // Iterate through each document in the snapshot
    usersSnapshot.forEach((userDoc) => {
      // Push the user data along with the document ID
      users.push({ id: userDoc.id, ...userDoc.data() } as IUser);
    });

    // Return the array of users
    return users;
  },
};
