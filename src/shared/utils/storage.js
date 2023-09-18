const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dest = `static/private/${req.userId}`;

        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }

        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
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

const generatePublicPath = (userId, file) => {
    return file.path.replace("static", "");
};

module.exports = {
    uploadImage,
    generatePublicPath,
};
