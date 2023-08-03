const Joi = require("joi");
const NotesService = require("../services/notesService");
const { ERROR_TYPES } = require("../shared/constants");

const editNote = async (req, res, next) => {
    try {
        const { error: bodyValidationErrors } = editNoteSchema.validate(req.body);
        if (bodyValidationErrors) {
            return res.status(400).json(bodyValidationErrors);
        }

        const { userId, params } = req;
        const { noteId } = params;
        const { title, content, image, category, public } = req.body;
        const payload = {
            title,
            content,
            image,
            categoryId: category,
            public: public,
        };
        const note = await NotesService.edit(noteId, userId, payload);

        return res.status(200).json(note);
    } catch (error) {
        if (error?.type === ERROR_TYPES.NoteNotFound) {
            return res.status(404).json({ message: "Note not found" });
        }

        next(error);
    }
};

const editNoteSchema = Joi.object({
    title: Joi.string().min(1).max(50).trim(),
    content: Joi.string().min(1).max(2000).trim(),
    image: Joi.string().uri(),
    category: Joi.string().min(1).trim(),
    public: Joi.boolean().strict(),
});

module.exports = editNote;
