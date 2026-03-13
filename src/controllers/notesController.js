import Note from "../models/Note.js";

// 1- Get all notes
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by creation date (newest first)
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes:", error.message);

        res.status(500).json({ message: "Internal Server Error" });
    }
}

// 2- Get a single note by ID
export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


// 2- Get a single note by ID
export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        console.log({ title, content });
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// 3- Update a note by ID
export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// 4- Delete a note by ID
export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note Deleted Successfully" });
    } catch (error) {
        console.error("Error in deleteNote:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
