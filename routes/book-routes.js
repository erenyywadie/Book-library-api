const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
const upload = require('./upload');
const { protect, restrictTo } = require('../controllers/auth-controller');

router.route('/')
    .get(bookController.getAllBooks)
    .post(protect, restrictTo('admin'), upload.single('image'), bookController.createBook);

router.route('/:id')
    .patch(protect, restrictTo('admin'), bookController.updateBook)
    .delete(protect, restrictTo('admin'), bookController.deleteBook);

module.exports = router;
