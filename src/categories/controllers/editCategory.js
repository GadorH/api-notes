const Joi = require("joi");
const CategoriesServices = require("../services/categoriesService");
const { ERROR_TYPES } = require("../shared/constants");

const editCategory = async (req, res, next) => {
    try {
        const { error: paramsValidationErrors } = editCategoryParamsSchema.validate(req.params);
        if (paramsValidationErrors) {
            return res.status(400).json(paramsValidationErrors);
        }

        const { error: bodyValidationErrors } = editCategoryBodySchema.validate(req.body);
        if (bodyValidationErrors) {
            return res.status(400).json(bodyValidationErrors);
        }

        const { categoryId } = req.params;
        const { name } = req.body;
        const category = await CategoriesServices.edit(categoryId, { name });

        return res.status(200).json(category);
    } catch (error) {
        if (error?.type === ERROR_TYPES.CategoryNotFound) {
            return res.status(404).json({ message: "Category not found" });
        }

        if (error?.type === ERROR_TYPES.CategoryAlreadyExists) {
            return res.status(409).json({ message: "Category already exists" });
        }

        next(error);
    }
};

const editCategoryParamsSchema = Joi.object({
    categoryId: Joi.string().min(1).trim().required(),
});

const editCategoryBodySchema = Joi.object({
    name: Joi.string().min(1).max(12).trim().required(),
});

module.exports = editCategory;
