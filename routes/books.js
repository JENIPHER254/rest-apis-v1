const express = require("express");
const router = express.Router();

// Temporary in-memory storage
let books = [{ id: 1, title: "Rich Dad Poor Dad" }];

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books (stored temporarily in memory).
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res) => {
  res.status(200).json(books);
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book
 *     description: Add a new book to temporary memory storage.
 *     parameters:
 *       - name: title
 *         in: formData
 *         description: Title of the book
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Book created successfully
 */
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newBook = { id: books.length + 1, title };
  books.push(newBook);
  res.status(201).json(newBook);
});

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update a book title temporarily by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the book to update
 *       - name: title
 *         in: formData
 *         description: New title of the book
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  book.title = title;
  res.status(200).json(book);
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Delete a book temporarily by ID (in-memory only).
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the book to delete
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((b) => b.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
