import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  loggedIn: { type: Boolean, default: false }
},
{
  timestamps: true
});

export const User = mongoose.model("User", userSchema);
