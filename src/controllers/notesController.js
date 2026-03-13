export function getAllNotes(req, res) {
    res.status(200).send("You jest fetched this notes...");
}
export function createNote(req, res) {
    res.status(201).json({ message: "Note Created Successfully" });
}

export function updateNote(req, res) {
    res.status(200).json({ message: "Note Updated Successfully" });
}

export function deleteNote(req, res) {
    res.status(200).json({ message: "Note Deleted Successfully" });
}
