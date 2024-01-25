//pulling in the connection to my local database
const client = require('./client')

const { books, characters, outfits } = require('./seedData')

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
            date int NOT NULL,
            image text NOT NULL
        );

        CREATE TABLE characters (
            "characterId" SERIAL PRIMARY KEY,
            "bookId" INTEGER REFERENCES books("bookId") NOT NULL,
            name varchar(50) NOT NULL,
            book varchar(50) NOT NULL,
            description varchar(255) NOT NULL,
            quote varchar(255) NOT NULL,
            image text NOT NULL
        );

        CREATE TABLE outfits (
            "outfitId" SERIAL PRIMARY KEY,
            "bookId" INTEGER REFERENCES books("bookId") NOT NULL,
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
//Create books
const createInitialBooks = async () => {
    try {
        for (const book of books) {
            console.log(book)
            const {
                rows: [books]
            } = await client.query(`
                INSERT INTO books(title, date, image)
                VALUES($1, $2, $3);
            `, [book.title, book.date, book.image]
            )
        }
        console.log("created books")
    }catch (error) {
        throw error
    }
}

//Create characters
const createInitialCharacters = async () => {
    try {
        for (const character of characters) {
            console.log(character)
            const {
                rows: [characters]
            } = await client.query(`
                INSERT INTO characters(name, "bookId", book, description, quote, image)
                VALUES($1, $2, $3, $4, $5, $6);
            `, [character.name, character.bookId, character.book, character.description, character.quote, character.image]
            )
        }
        console.log("created characters")
    }catch (error) {
        throw error
    }
}

//Create outfits
const createInitialOutfits = async () => {
    try {
        for (const outfit of outfits) {
            console.log(outfit)
            const {
                rows: [outfits]
            } = await client.query(`
                INSERT INTO outfits(name, "bookId", image)
                VALUES($1, $2, $3);
            `, [outfit.name, outfit.bookId, outfit.image]
            )
        }
        console.log("created outfits")
    }catch (error) {
        throw error
    }
}

//Call all my functions to build my database
const buildDb = async () => {
    try {
        //ACTUALLY CONNECT to my local database
        client.connect()

        //Run our functions
        await dropTables()
        await createTables()

        await createInitialBooks()
        await createInitialCharacters()
        await createInitialOutfits()

    } catch (error) {
        console.error(error)
      //finally will ALWAYS run, whether the catch triggers or not  
    } finally {
        //close our connection to my local database
        client.end()
    }
}

buildDb()