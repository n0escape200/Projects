import { Router } from "express";
import { loginUser, registerUser } from "../Controller/User.js";

const router = Router();

router.post("/login", loginUser);

//Register User
router.post("/register", registerUser);

export default router;
