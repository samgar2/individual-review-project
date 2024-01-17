//import client and util to get our functionality setup
const client = require('../client')

const util = require('../util')

//Create functions for each operation I want to perform :)
//GET: show a list of all of the outfits 
async function getAllOutfits() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM outfits;
        `);
        return rows;
    } catch (err) {
        throw err;
    }
}

// GET: show a single outfit
async function getOutfitById(id) {
    try {
        const { rows: [outfit] } = await client.query(`
            SELECT * FROM outfits
            WHERE id = $1;
        `, [id]);
        return outfit;
    } catch (error) {
        throw error;
    }
}

//export our funcions
module.exports = { getAllOutfits, getOutfitById }
