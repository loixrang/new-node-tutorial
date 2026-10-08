import express from "express"
const app = express() //create an express app

app.use(express.json())

import { router as userRouter } from "./routes/user.route.js"
import { router as postRouter } from "./routes/posts.route.js"

app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", postRouter)

export default app;