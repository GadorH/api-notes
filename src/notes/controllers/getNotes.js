const NotesServices = require("../services/notesService");

const getNotes = async (req, res, next) => {
    try {
        const { userId } = req;
        const { fields: queryFields } = req.query;
        const fields = queryFields ? (Array.isArray(queryFields) ? queryFields : [queryFields]) : null;
        let notes = await NotesServices.getAllNotes(userId);

        if (fields) {
            notes = notes.map((note) => {
                const { userId: user, ...rest } = note;
                return fields.reduce((obj, field) => {
                    return {
                        ...obj,
                        [field]: rest[field],
                    };
                }, {});
            });
        }

        return res.status(200).json(
            notes.map((note) => {
                const { userId: user, ...rest } = note;
                return {
                    ...rest,
                };
            }),
        );
    } catch (error) {
        next(error);
    }
};

module.exports = getNotes;
