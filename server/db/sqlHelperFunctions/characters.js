//import client and util to get our functionality setup
const client = require('../client')

//Create functions for each operation I want to perform :)
//GET: show a list of all of the characters 
async function getAllCharacters() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM characters;
        `);
        return rows;
    } catch (err) {
        throw err;
    }
}

// GET: show a single character
async function getCharacterById(characterId) {
    try {
        const { rows: [character] } = await client.query(`
            SELECT * FROM characters
            WHERE "characterId"=$1;
        `, [characterId]);
        return character;
    } catch (error) {
        throw error;
    }
}

// POST: create a new character
async function createCharacter(body) {
    const { name, bookId, description, quote, image } = body;
    try {
        const { rows: [character] } = await client.query(`
            INSERT INTO characters(name, "bookId", description, quote, image)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
        `, [name, bookId, description, quote, image]);
        return character;
    } catch (error) {
        throw error;
    }
}

// PUT: update a single character
async function updateCharacter(characterId, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    if (setString.length === 0) {
        return;
    }
    try {
        const { rows: [character] } = await client.query(`
            UPDATE characters
            SET ${setString}
            WHERE "characterId"=${characterId}
            RETURNING *;
        `, Object.values(fields));
        return character;
    } catch (error) {
        throw error;
    }
}

// DELETE: delete a single character
async function deleteCharacter(characterId) {
    try {
        const { rows: [character] } = await client.query(`
            DELETE FROM characters
            WHERE "characterId"=$1
            RETURNING *;
        `, [characterId]);
        return character;
    } catch (error) {
        throw error;
    }
}

//export our funcions
module.exports = { getAllCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter }