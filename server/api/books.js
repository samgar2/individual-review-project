const express = require('express');
const router = express.Router();

const { getAllBooks } = require('../db/sqlHelperFunctions/books');

// GET - /api/ - get all books
router.get('/', async (req, res, next) => {
    try {
        const books = await getAllBooks();
        res.send(books);
    } catch (error) {
        next(error);
    }
});

module.exports = router;