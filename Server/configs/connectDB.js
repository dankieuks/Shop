import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbConnect;
