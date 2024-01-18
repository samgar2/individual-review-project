const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/books
router.use('/books', require('./books'));

// ROUTER: /api/characters
router.use('/characters', require('./characters'));

// // ROUTER: /api/outfits
// router.use('/outfits', require('./outfits'));

module.exports = router;