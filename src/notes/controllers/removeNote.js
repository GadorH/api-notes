const NotesService = require("../services/notesService");
const { ERROR_TYPES } = require("../shared/constants");

const removeNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const { userId } = req;

        await NotesService.remove(noteId, userId);
        return res.status(200).json({});
    } catch (error) {
        if (error?.type === ERROR_TYPES.NoteNotFound) {
            return res.status(400).json({ message: "Invalid Params" });
        }
        next(error);
    }
};

module.exports = removeNote;
