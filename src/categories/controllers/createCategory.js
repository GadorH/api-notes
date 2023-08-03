const Joi = require("joi");
const { ERROR_TYPES } = require("../shared/constants");
const CategoriesService = require("../services/categoriesService");

const createCategory = async (req, res, next) => {
    try {
        const { error: validationErrors } = createCategorySchema.validate(req.body);
        if (validationErrors) {
            return res.status(400).json(validationErrors);
        }

        const { name } = req.body;
        const category = await CategoriesService.create({ name });

        return res.status(201).json(category);
    } catch (error) {
        if (error?.type === ERROR_TYPES.CategoryAlreadyExists) {
            return res.status(409).json({ message: "Category already exists" });
        }

        next(error);
    }
};

const createCategorySchema = Joi.object({
    name: Joi.string().min(1).max(12).trim().required(),
});

module.exports = createCategory;
