import express from "express";
import {
  forgotPassword,
  signup,
  verifyEmail,
  login,
  logout,
  checkAuth,
} from "../controller/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


router.post("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgotPassword);

export default router;
