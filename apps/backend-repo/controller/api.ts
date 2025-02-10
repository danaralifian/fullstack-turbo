import { Request, Response } from "express";
import { userCollection } from "../repository/userCollection";
import { IUser } from "../entities/user";

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
