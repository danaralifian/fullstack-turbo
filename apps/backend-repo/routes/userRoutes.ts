import { Router } from "express";
import { updateUser, fetchUser, register, login } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.put("/update-user-data", authMiddleware, updateUser);
router.get("/fetch-user-data", authMiddleware, fetchUser);
router.post("/register", register);
router.post("/login", login);

export default router;
