const AuthService = require("../services/authService");

const isAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const [, token] = authorization.split(" "); // Bearer 123123124
        const userId = await AuthService.verifyToken(token);

        req.userId = userId;
    } catch (error) {
        return res.status(403).json({ message: "Forbidden" });
    }

    return next();
};

module.exports = isAuthenticated;
