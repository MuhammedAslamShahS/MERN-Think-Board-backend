import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected: status: successfully ✅; \non:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB status ❌: \nMongoDB error:", error.message);
    process.exit(1);
  }
};