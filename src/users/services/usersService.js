const { db } = require("../../shared/utils/db");
const { create: createCategory } = require("../../categories/services/categoriesService");

const findByEmail = async (email) => {
    const user = await db.user.findUnique({ where: { email: email } });
    return user;
};

const create = async ({ email, password }) => {
    const DEFAULT_CATEGORY_NAME = "general";
    const user = await db.user.create({
        data: {
            email: email,
            password: password,
        },
    });

    await createCategory(user.id, { name: DEFAULT_CATEGORY_NAME });

    return user;
};

module.exports = {
    findByEmail,
    create,
};
