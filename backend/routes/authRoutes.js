import express from "express";
import { signup, verifyEmail } from "../controller/authController.js";
// import { login } from "../controller/authController.js";
// import { logout } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);

router.post('/verify-email', verifyEmail);

export default router;
