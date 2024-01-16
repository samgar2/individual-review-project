//import client and util to get our functionality setup
const client = require('../client')

const util = require('../util')

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

//export our funcions
module.exports = { getAllCharacters }