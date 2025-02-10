import { Router } from "express";
import { updateUser, fetchUser } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.put("/update-user-data", updateUser);
router.get("/fetch-user-data", fetchUser);

export default router;
