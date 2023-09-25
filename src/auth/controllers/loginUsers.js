const Joi = require("joi");
const AuthService = require("../services/authService");
const UsersService = require("../../users/services/usersService");
const { ERROR_TYPES } = require("../shared/constants");

const loginUsers = async (req, res, next) => {
    try {
        const { error: validationErrors } = loginUsersSchema.validate(req.body);

        if (validationErrors) {
            return res.status(400).json(validationErrors);
        }

        const { email, password } = req.body;
        const user = await UsersService.findByEmail(email);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        await AuthService.isValidPassword(password, user);

        const { accessToken } = await AuthService.login(user);

        return res.status(200).json({ accessToken: accessToken });
    } catch (error) {
        if (error?.type === ERROR_TYPES.NotValidPassword) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        next(error);
    }
};

const loginUsersSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
});

module.exports = loginUsers;
