const CategoriesServices = require("../services/categoriesService");
const { ERROR_TYPES } = require("../shared/constants");

const removeCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        await CategoriesServices.remove({ categoryId });

        return res.status(200).json({});
    } catch (error) {
        if (error?.type === ERROR_TYPES.CategoryNotFound) {
            return res.status(400).json({ message: "Invalid Parameters" });
        }
        next(error);
    }
};

module.exports = removeCategory;
