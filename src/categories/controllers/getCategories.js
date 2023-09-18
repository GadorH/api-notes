const CategoriesServices = require("../services/categoriesService");

const getCategories = async (req, res, next) => {
    try {
        const { userId } = req;
        const categories = await CategoriesServices.getAll(userId);

        return res.status(200).json(categories.map((category) => ({ id: category.id, name: category.name, default: category.default })));
    } catch (error) {
        next(error);
    }
};

module.exports = getCategories;
