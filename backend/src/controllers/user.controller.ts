import { User } from "../models/user.model.js";
import { type RequestHandler } from "express";

const registerUser: RequestHandler = async (req, res) => {
  try {
    const {username, email, password} = req.body;
  } catch (error) {
    
  }
}