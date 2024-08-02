import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};
