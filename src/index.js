import dotenv from "dotenv";
import connectDB from "./db/DBConnect.js";

dotenv.config({ path: "./env" });

connectDB();
