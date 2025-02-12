import IUser from "@repo/interfaces/models/user";
import { db } from "../config/firebaseConfig";
import { auth } from "firebase-admin";

export const userCollection = {
  update: async (userId: string, userData: Partial<IUser>) => {
    await db.collection("USERS").doc(userId).set(userData, { merge: true });
  },

  fetch: async () => {
    // Reference to the USERS collection
    const usersCollection = db.collection("USERS");

    // Fetch all documents in the USERS collection
    const usersSnapshot = await usersCollection.get();

    const users: IUser[] = [];

    usersSnapshot.forEach((userDoc) => {
      users.push({ id: userDoc.id, ...userDoc.data() } as IUser);
    });

    return users;
  },

  register: async (email: string, password: string) => {
    const userRecord = await auth().createUser({
      email,
      password,
    });

    const user = await auth().getUser(userRecord.uid);
    return user;
  },

  login: async (email: string, password: string) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAw0dmX0bM41rRyvtXSeQs5iY0Ioyn2oUY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    const data = await response.json();
    return data;
  },
};
