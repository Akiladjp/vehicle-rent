import userModels from "../models/userModels.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModels.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credintial", success: false });
    }

    const ispasswordValid = await bcryptjs.compare(password, user.password);

    if (!ispasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "invalid password" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({ success: true, message: "Successfully Login" });

  } catch (error) {
    res.status(400).json({ message: "error in  login" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    res.status(400).json({ message: "error in  logout" });
  }
};

export const signup = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const userExist = await userModels.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); // Fix: added parentheses to toString()

    const user = new userModels({
      email,
      password: hashedPassword,
      name,
      mobile,
      verificationToken,
      verificationTokenExpiredAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    console.log(user.json);
    await user.save();

    // Generate JWT and set it as a cookie
    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in signup controller", error: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { verificationCode } = req.body;

  try {
    const userVerificationToken = await userModels.findOne({
      verificationToken: verificationCode,
      verificationTokenExpiredAt: { $gt: Date.now() },
    });

    if (!userVerificationToken) {
      return res.status(500).json({ message: "Invalid verification code" });
    }

    userVerificationToken.isVerified = true;
    userVerificationToken.verificationToken = undefined;
    userVerificationToken.verificationTokenExpiredAt = undefined;

    await userVerificationToken.save();

    await sendWelcomeEmail(
      userVerificationToken.email,
      userVerificationToken.name
    );

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...userVerificationToken._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in verify email", error: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await userModels.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid email", success: false });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    userExist.resetPasswordToken = resetToken;
    userExist.resetPasswordExpiredAt = resetTokenExpiresAt;

    await userExist.save();

    await sendPasswordResetEmail(
      userExist.email,
      resetToken,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );
  } catch (error) {
    res.status(500).json({ message: "Error in forgot password" });
  }
};

export const checkAuth = async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await userModels.findById(req.userId).select("_password");

    if (!userExist) {
      return res.status(400).json({ sucess: false, message: "user not found" });
    }

    res.status(200).json({ success: true, userExist });
  } catch (error) {
    res.status(500).json({ message: "Error in check auth" });
  }
};
