import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as any).user = decodedToken;

    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden", error: error });
    return;
  }
};
