//pulling in the connection to my local database
const client = require('./client')

//Drop tables for data cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables...")
        await client.query(`
        DROP TABLE IF EXISTS outfits;
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS books;
        `)
        console.log("Tables dropped!")
    } catch (error) {
        console.log("Error dropping tables: ", error)
    }
}

//Create tables to give data a home <3
const createTables = async () => {
    try {
        console.log("building tables...")
        await client.query(`
        CREATE TABLE books (
            "bookId" SERIAL PRIMARY KEY,
            title varchar(50) UNIQUE NOT NULL,
            bio varchar(255) NOT NULL,
            image text NOT NULL
        );

        CREATE TABLE characters (
            "characterId" SERIAL PRIMARY KEY,
            "bookId" INTEGER REFERENCES books("bookId") NOT NULL,
            name varchar(50) NOT NULL,
            description varchar(255) NOT NULL,
            quote varchar(255) NOT NULL,
            image text NOT NULL
        );

        CREATE TABLE outfits (
            "outfitId" SERIAL PRIMARY KEY,
            "characterId" INTEGER REFERENCES characters("characterId") NOT NULL,
            "bookId" INTEGER REFERENCES books("bookId"),
            name varchar(100) NOT NULL,
            image text NOT NULL
        );
        `)
        console.log("tables built!")
    } catch (error) {
        console.error(error)
    }
}

//Populate tables to have data later :)

//Call all my functions to build my database
const buildDb = async () => {
    try {
        //ACTUALLY CONNECT to my local database
        client.connect()

        //Run our functions
        await dropTables()
        await createTables()

        // await createInitialCharacters()
        // await createInitialBooks()
        // await createInitialOutfits()

    } catch (error) {
        console.error(error)
      //finally will ALWAYS run, whether the catch triggers or not  
    } finally {
        //close our connection to my local database
        client.end()
    }
}

buildDb()