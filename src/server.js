import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGODB_URI);

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is started on port: ${PORT}`);
});

