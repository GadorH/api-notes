const { Router } = require("express");
const isAuthenticatedMiddleware = require("../auth/middlewares/isAuthenticated");
const createNoteController = require("./controllers/createNote");
const getNotesController = require("./controllers/getNotes");
const getPublicNoteController = require("./controllers/getPublicNote");
const getNoteByIdController = require("./controllers/getNoteById");
const editNoteController = require("./controllers/editNote");
const removeNoteController = require("./controllers/removeNote");
const uploadNoteImageController = require("./controllers/uploadNoteImage");

const router = new Router();

router.post("/", isAuthenticatedMiddleware, createNoteController);
router.get("/", isAuthenticatedMiddleware, getNotesController);
router.get("/share/:noteId", getPublicNoteController);
router.get("/:noteId", isAuthenticatedMiddleware, getNoteByIdController);
router.put("/:noteId", isAuthenticatedMiddleware, editNoteController);
router.delete("/:noteId", isAuthenticatedMiddleware, removeNoteController);
router.post("/:noteId/upload-image", isAuthenticatedMiddleware, uploadNoteImageController);

module.exports = router;
