import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimit from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGODB_URI);
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(rateLimit); // Apply rate limiting middleware to all routes
connectDB();


const PORT = process.env.PORT || 5000;

app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
    console.log(`Server is started on port: ${PORT}`);
});
