const NotesServices = require("../services/notesService");

const getPublicNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const note = await NotesServices.getPublicNote(noteId);

        if (!note) {
            return res.status(400).json({ message: "Note not found" });
        }
        return res.status(200).json(note);
    } catch (error) {
        next(error);
    }
};

module.exports = getPublicNote;
