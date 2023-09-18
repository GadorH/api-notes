const NotesService = require("../services/notesService");
const { uploadImage, generatePublicPath } = require("../../shared/utils/storage");

const uploadNoteImage = async (req, res) => {
    try {
        const { userId } = req;

        await uploadImage(req, res);
        const imageUrl = `${req.protocol}://${req.get("host")}/static/${userId}/${req.file.filename}`;

        return res.status(200).json({ location: imageUrl });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Invalid parameters" });
    }
};

module.exports = uploadNoteImage;
