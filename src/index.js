const express = require("express");
const authRouter = require("./auth/router");
const notesRouter = require("./notes/router");
const categoriesRouter = require("./categories/router");

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/notes", notesRouter);
app.use("/categories", categoriesRouter);
app.use("/uploads", express.static("public/uploads"));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
