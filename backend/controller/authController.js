import userModels from "../models/userModels.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookie.js";

// export const login = async(req, res) => {

// }

// export const logout = async(req, res) => {

// }

export const signup = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    if (!name) {
      throw new Error("Name is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }
    if (!mobile) {
      throw new Error("Phone is required");
    }
    if (!password) {
      throw new Error("Password is required");
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

    await user.save();

    // Generate JWT and set it as a cookie
    generateTokenAndSetCookie(res, user._id);

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
