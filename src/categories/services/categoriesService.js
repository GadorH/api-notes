const { Prisma } = require("@prisma/client");
const { db } = require("../../shared/utils/db");
const ApplicationErrors = require("../../shared/utils/applicationErrors");
const { ERROR_TYPES } = require("../shared/constants");

const getAll = async (userId) => {
    try {
        const categories = await db.category.findMany({
            where: {
                userId: userId,
            },
        });

        return categories;
    } catch (error) {
        throw error;
    }
};

const create = async (userId, { name }) => {
    try {
        const categoryExists = await db.category
            .findFirst({
                where: {
                    userId: userId,
                    name: name,
                },
            })
            .then(Boolean);

        if (categoryExists) {
            throw ApplicationErrors.create(ERROR_TYPES.CategoryAlreadyExists);
        }

        const category = await db.category.create({
            data: {
                name: name,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });

        return category;
    } catch (error) {
        throw error;
    }
};

const edit = async (categoryId, { name }) => {
    try {
        const category = await db.category.update({
            where: {
                id: categoryId,
            },
            data: {
                name: name,
            },
        });
        return category;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw ApplicationErrors.create(ERROR_TYPES.CategoryAlreadyExists);
        }

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            throw ApplicationErrors.create(ERROR_TYPES.CategoryNotFound);
        }

        throw error;
    }
};

const remove = async ({ categoryId }) => {
    try {
        await db.category.delete({ where: { id: categoryId } });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            throw ApplicationErrors.create(ERROR_TYPES.CategoryNotFound);
        }

        throw error;
    }
};

module.exports = {
    getAll,
    create,
    edit,
    remove,
};
