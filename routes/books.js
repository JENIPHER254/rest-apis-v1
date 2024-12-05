const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *        200:
 *          description: Success
 */
router.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Rich Dad Poor Dad",
    },
  ]);
});

/**
 * @swagger
 * /books:
 *   post:
 *     description: Post a book
 *     parameters:
 *     - name: title
 *       description: Title of the book
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *        201:
 *          description: Created
 */
router.post("/", (req, res) => {
  res.status(201).send("Record posted");
});

/**
 * @swagger
 * /books:
 *   delete:
 *     description: Delete item by ID
 *     responses:
 *       204:
 *         description: Deleted
 */
router.delete("/", (req, res) => {
  res.status(204).send();
});

/**
 * @swagger
 * /books:
 *   put:
 *     description: Update items
 *     responses:
 *        205:
 *          description: Updated
 */
router.put("/", (req, res) => {
  res.status(205).send();
});

module.exports = router;
