import { Post } from "../models/posts.model.js";
import type{ Response, Request } from "express";

//create a post
const createPost = async (req: Request, res: Response) => {
  try {
    const {name, description, age} = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({message: "All fields are required"})
    }
    const post =  await Post.create({name, description, age})
    
  } catch (error) {
    
  }
}