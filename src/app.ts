import express from "express"
const app = express() //create an express app

import userRouter from "./routes/user.route.js";

app.use("/api/vi/users", userRouter)

export default app;