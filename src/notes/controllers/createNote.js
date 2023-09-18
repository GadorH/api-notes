const Joi = require("joi");
const NotesServices = require("../services/notesService");

const createNote = async (req, res, next) => {
    try {
        const { error: bodyValidatorErrors } = createNoteBodySchema.validate(req.body);
        if (bodyValidatorErrors) {
            return res.status(400).json(bodyValidatorErrors);
        }

        const { userId } = req;
        const note = await NotesServices.create(userId, req.body);

        return res.status(201).json(note);
    } catch (error) {
        return res.status(400).json({ message: "Invalid Parameters" });
    }
};

const createNoteBodySchema = Joi.object({
    title: [Joi.string().min(1).max(50).trim().optional(), Joi.allow(null)],
    content: Joi.string().min(1).trim().required(),
    categoryId: Joi.string().min(1).trim(),
});

module.exports = createNote;
