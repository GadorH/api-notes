const { Prisma } = require("@prisma/client");
const { db } = require("../../shared/utils/db");
const ApplicationErrors = require("../../shared/utils/applicationErrors");
const { ERROR_TYPES } = require("../shared/constants");

const create = async ({ name }) => {
    try {
        const category = await db.category.create({
            data: {
                name: name,
            },
        });

        return category;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw ApplicationErrors.create(ERROR_TYPES.CategoryAlreadyExists);
        }

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
    create,
    edit,
    remove,
};
