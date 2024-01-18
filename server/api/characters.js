const express = require('express');
const router = express.Router();

const { getAllCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter} = require('../db/sqlHelperFunctions/characters');

// GET - /api/characters - get all characters
router.get('/', async (req, res, next) => {
    try {
        const characters = await getAllCharacters();
        res.send(characters);
    } catch (error) {
        next(error);
    }
});

// GET - /api/characters/:characterId - get a single character by characterId
router.get('/:characterId', async (req, res, next) => {
    try {
        const character = await getCharacterById(req.params.characterId);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

// POST - /api/characters - create a new character
router.post('/', async (req, res, next) => {
    try {
        const character = await createCharacter(req.body);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/characters/:characterId - update a single character by characterId
router.put('/:characterId', async (req, res, next) => {
    try {
        const character = await updateCharacter(req.params.characterId, req.body);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/characters/:characterId - delete a single character by characterId
router.delete('/:characterId', async (req, res, next) => {
    try {
        const character = await deleteCharacter(req.params.characterId);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

module.exports = router;