import { Router } from "express";
import registerUsers from "../controllers/user.controller.js";

const router = Router();

router.route("register").post(registerUsers);
router.route("login").post(registerUsers);

export default router;
