import express from "express";
import { signup } from "../controller/authController.js";
// import { login } from "../controller/authController.js";
// import { logout } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
