const express = require("express");
const router = express.Router();
const { getBooks, addBook, addBooks, updateBook, deleteBook, countBooks, getBookById} = require("../controllers/bookController");

router.get("/", getBooks);

router.post("/", addBook);

router.post("/multiple", addBooks);  // New route for adding multiple books

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.get("/count", countBooks);

router.get("/:id", getBookById);

module.exports = router;
