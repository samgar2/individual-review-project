const express = require('express');
const router = express.Router();

const { getAllOutfits } = require('../db/sqlHelperFunctions/outfits');

// GET - /api/ - get all outfits
router.get('/', async (req, res, next) => {
    try {
        const outfits = await getAllOutfits();
        res.send(outfits);
    } catch (error) {
        next(error);
    }
});

module.exports = router;