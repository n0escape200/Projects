import { Router } from "express";
import { findUserByIt, loginUser, registerUser } from "../Controller/User.js";

const router = Router();

//Login user
router.post("/login", loginUser);

//Register User
router.post("/register", registerUser);

router.get("/findUser/:id", findUserByIt);

export default router;
