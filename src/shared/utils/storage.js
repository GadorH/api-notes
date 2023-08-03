const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
    destination: "public/uploads/",
    filename: (req, file, cb) => {
        const uniqueSuffix = uuidv4();
        const extension = path.extname(file.originalname);
        cb(null, `img-${uniqueSuffix}${extension}`);
    },
});

const upload = multer({ storage }).single("image");

const uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};

const generatePublicPath = (file) => {
    return file.path.replace("public", "");
};

module.exports = {
    uploadImage,
    generatePublicPath,
};
