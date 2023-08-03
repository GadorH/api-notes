const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApplicationErrors = require("../../shared/utils/applicationErrors");
const { ERROR_TYPES } = require("../shared/constants");

const hashString = async (string) => {
    return await bcrypt.hash(string, 12);
};

const login = async (user) => {
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "1d",
    });

    return { accessToken: accessToken };
};

const verifyToken = async (token) => {
    const { userId } = await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return userId;
};

const isValidPassword = async (password, user) => {
    try {
        return await bcrypt.compare(password, user.password);
    } catch (error) {
        throw ApplicationErrors.create(ERROR_TYPES.NotValidPassword);
    }
};

module.exports = {
    hashString,
    login,
    isValidPassword,
    verifyToken,
};
