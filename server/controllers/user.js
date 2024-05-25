import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("User Already Exist", 404));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    sendCookie(user, res, `Welcome Back ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("token", {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
};
