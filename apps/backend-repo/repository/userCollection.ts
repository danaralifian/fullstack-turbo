import { db } from "../config/firebaseConfig";
import { IUser } from "../entities/user";
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

  register: async (email: string, password: string) => {
    // Create a new user in Firebase Authentication
    const userRecord = await auth().createUser({
      email,
      password,
    });

    const user = await auth().getUser(userRecord.uid);
    return user;
  },

  login: async (email: string, password: string) => {
    // Use Firebase Client SDK to sign in and generate a custom token
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
