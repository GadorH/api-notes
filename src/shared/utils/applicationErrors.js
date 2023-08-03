const create = (type) => {
    const error = new Error(type);
    error.type = type;

    return error;
};

module.exports = {
    create,
};
