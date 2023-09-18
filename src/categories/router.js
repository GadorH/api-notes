const { Router } = require("express");
const isAuthenticatedMiddleware = require("../auth/middlewares/isAuthenticated");
const getCategoriesController = require("./controllers/getCategories");
const createCategoryController = require("./controllers/createCategory");
const editCategoryController = require("./controllers/editCategory");
const removeCategoryController = require("./controllers/removeCategory");

const router = new Router();

router.use(isAuthenticatedMiddleware);

router.get("/", getCategoriesController);
router.post("/", createCategoryController);
router.put("/:categoryId", editCategoryController);
router.delete("/:categoryId", removeCategoryController);

module.exports = router;
