const express = require('express');
const { booksController } =require('../controllers');
const router = express.Router();

router.get('/', booksController.listAllBooks);
router.get(':id', booksController.listBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;