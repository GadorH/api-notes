const express = require("express");

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
