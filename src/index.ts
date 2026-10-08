import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./config/database.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000

const startServer = async () => {
  try {
    await connectDB()

    const server = app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`)
    })
    server.on("error", (error) => {
      console.log("ERROR", error);
      throw error
    })
  } catch (error) {
    console.log("MongoDB connection failed", error);
    
  }
}

startServer()