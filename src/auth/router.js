const { Router } = require("express");
const registerUsersController = require("./controllers/registerUsers");
const loginUsersController = require("./controllers/loginUsers");

const router = new Router();

router.post("/register", registerUsersController);
router.post("/login", loginUsersController);

module.exports = router;
