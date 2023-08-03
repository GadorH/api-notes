const { db } = require("../../shared/utils/db");

const findByEmail = async (email) => {
    const user = await db.user.findUnique({ where: { email: email } });
    return user;
};

const create = async ({ email, password }) => {
    const user = await db.user.create({
        data: {
            email: email,
            password: password,
        },
    });

    return user;
};

module.exports = {
    findByEmail,
    create,
};
