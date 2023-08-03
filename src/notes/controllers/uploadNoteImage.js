const NotesService = require("../services/notesService");
const { uploadImage, generatePublicPath } = require("../../shared/utils/storage");

const uploadNoteImage = async (req, res) => {
    try {
        const { userId } = req;
        const { noteId } = req.params;

        if (!(await NotesService.getNote(noteId, userId))) {
            return res.status(404).json({ message: "Note not found" });
        }

        await uploadImage(req, res);
        const staticURLPath = generatePublicPath(req.file);
        const note = await NotesService.uploadNoteImage(noteId, userId, staticURLPath);

        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ message: "Invalid parameters" });
    }
};

module.exports = uploadNoteImage;
