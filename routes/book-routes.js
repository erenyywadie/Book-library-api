const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
const upload = require('./upload');

router.route('/')
    .get(bookController.getAllBooks)
    .post(upload.single('image'), bookController.createBook);

router.route('/:id')
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router;