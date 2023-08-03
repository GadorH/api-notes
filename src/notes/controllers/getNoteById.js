const NotesServices = require("../services/notesService");

const getNoteById = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const { userId } = req;
        const note = await NotesServices.getNote(noteId, userId);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        return res.status(200).json(note);
    } catch (error) {
        next(error);
    }
};

module.exports = getNoteById;
