const path = require("path");
const express = require("express");
const cors = require("cors");
const authRouter = require("./auth/router");
const notesRouter = require("./notes/router");
const categoriesRouter = require("./categories/router");

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/notes", notesRouter);
app.use("/categories", categoriesRouter);
app.use("/static/:userId/:imageName", (req, res) => {
    const userId = req.params.userId;
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, "..", "static", "private", userId, imageName);

    res.sendFile(imagePath);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
