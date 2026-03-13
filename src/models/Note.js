import mongoose from "mongoose";

// 1- Define the Note schema
// 2- Create the Note model based on the schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }, // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
