const Joi = require("joi");
const AuthService = require("../services/authService");
const UsersService = require("../../users/services/usersService");

const registerUsers = async (req, res, next) => {
    try {
        const { error: validationErrors } = registerUsersSchema.validate(req.body);
        if (validationErrors) {
            return res.status(400).json(validationErrors);
        }

        const { email, password } = req.body;
        if (await UsersService.findByEmail(email)) {
            return res.status(409).json({ message: "User already exists" });
        }

        const user = await UsersService.create({
            email: email,
            password: await AuthService.hashString(password),
        });
        const { accessToken } = await AuthService.login(user);

        return res.status(201).json({ accessToken: accessToken });
    } catch (error) {
        next(error);
    }
};

const registerUsersSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
});

module.exports = registerUsers;
