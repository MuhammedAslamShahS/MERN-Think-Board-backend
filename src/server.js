import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimit from "./middleware/rateLimiter.js";

dotenv.config();
connectDB();

console.log(process.env.MONGODB_URI);

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);
// Middleware to parse JSON bodies
app.use(express.json());

app.use(rateLimit); // Apply rate limiting middleware to all routes


const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is started on port: ${PORT}`);
});
