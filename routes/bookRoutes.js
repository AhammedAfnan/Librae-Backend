const express = require('express');
const bookController = require('../controllers/bookController');
const {body} = require('express-validator');

const router = express.Router();


// Route to get all books
router.get('/', bookController.getAllBooks);

// Route to add a book with validation
router.post('/',
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('author').notEmpty().withMessage('Author is required'),
        body('description').notEmpty().withMessage('Description is required'),
      ],
bookController.addBook);

// Route to delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;