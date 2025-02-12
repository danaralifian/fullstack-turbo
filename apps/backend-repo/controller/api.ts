import { Request, Response } from "express";
import { userCollection } from "../repository/userCollection";
import IUser from "@repo/interfaces/models/user";

const checkEmailPassword = (email: string, password: string, res: Response) => {
  // check body for email and password
  if (!email || !password) {
    res.status(422).json({
      email: "Email is required",
      password: "Password is required",
    });
    return;
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  if (!userData.id) {
    res.status(404).json({ message: "record not found" });
    return;
  }

  try {
    await userCollection.update(userData.id, userData);
    res.status(200).json({ message: "User  data updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user data", error });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const userData = await userCollection.fetch();
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User  not found " });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  checkEmailPassword(email, password, res);

  try {
    // Create a new user in Firebase Authentication
    const userData = await userCollection.register(email, password);
    if (userData) {
      const userLogin = await userCollection.login(email, password);
      res.status(200).json({
        email,
        token: userLogin.token,
      });
    } else {
      res.status(404).json({ message: "User  not found " });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  checkEmailPassword(email, password, res);

  try {
    const userData = await userCollection.login(email, password);
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User  not found " });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
