import { Router } from "express";
import {createPost, deletePost, getPosts, updatePost} from "../controllers/posts.controller.js";

export const router = Router()

router.route("/create").post(createPost)
router.route("/getPosts").get(getPosts)
router.route("/update/:id").patch(updatePost)
router.route("/delete/:id").delete(deletePost)