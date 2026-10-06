import { User } from "../models/user.model.js";
import type { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are important" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });

    return res.status(201).json({
      message: "User registered",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    //checking if the user already exists
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(400).json({ message: "Couldn't find user" });
    }

    //compare the passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "invalid credentials" });
    res.status(200).json({ message: "Successfully logged in", user: {
      id: user._id
    } });
  } catch (error) {}
};
export default { registerUser };
