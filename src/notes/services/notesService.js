const { Prisma } = require("@prisma/client");
const { db } = require("../../shared/utils/db");
const ApplicationErrors = require("../../shared/utils/applicationErrors");
const { ERROR_TYPES } = require("../shared/constants");

const create = async (userId, payload) => {
    try {
        const { title, content, image, category } = payload;

        const note = await db.note.create({
            data: {
                title: title,
                content: content,
                image: image,
                category: {
                    connect: {
                        id: category,
                    },
                },
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });

        return note;
    } catch (error) {
        throw error;
    }
};

const getAllNotes = async (userId) => {
    try {
        const notes = await db.note.findMany({
            where: {
                userId: userId,
            },
        });

        return notes;
    } catch (error) {
        throw error;
    }
};

const getNote = async (noteId, userId) => {
    try {
        const note = await db.note.findUnique({
            where: {
                id: noteId,
                userId: userId,
            },
        });

        return note;
    } catch (error) {
        throw error;
    }
};

const edit = async (noteId, userId, payload) => {
    try {
        const note = await db.note.update({
            where: {
                id: noteId,
                userId: userId,
            },
            data: payload,
        });

        return note;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            throw ApplicationErrors.create(ERROR_TYPES.NoteNotFound);
        }

        throw error;
    }
};

const getPublicNote = async (noteId) => {
    try {
        const note = await db.note.findUnique({
            where: {
                id: noteId,
                public: true,
            },
        });

        return note;
    } catch (error) {
        throw error;
    }
};

const remove = async (noteId, userId) => {
    try {
        await db.note.delete({
            where: {
                id: noteId,
                userId: userId,
            },
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            throw ApplicationErrors.create(ERROR_TYPES.NoteNotFound);
        }
        throw error;
    }
};

const uploadNoteImage = async (noteId, userId, image) => {
    try {
        const note = await db.note.update({
            where: {
                id: noteId,
                userId: userId,
            },
            data: {
                image: image,
            },
        });

        return note;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            throw ApplicationErrors.create(ERROR_TYPES.NoteNotFound);
        }

        throw error;
    }
};

module.exports = {
    create,
    getAllNotes,
    getNote,
    edit,
    getPublicNote,
    remove,
    uploadNoteImage,
};
