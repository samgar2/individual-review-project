//Make some arrays of objects based on the schema I created

//characters
const characters = [
    {name: "Jane Bennet", bookId: 1, description: "#", quote: "#", image: "#"},
    {name: "Elizabeth Bennet", bookId: 1, description: "#", quote: "#", image: "#"},
    {name: "Elinor Dashwood", bookId: 2, description: "#", quote: "#", image: "#"},
    {name: "Marianne Dashwood", bookId: 2, description: "#", quote: "#", image: "#"},
    {name: "Emma Woodhouse", bookId: 3, description: "#", quote: "#", image: "#"}
]

//books
const books = [
    {title: "Pride and Prejudice", bio: "#", image: "#"},
    {title: "Sense and Sensibility", bio: "#", image: "#"},
    {title: "Emma", bio: "#", image: "#"}
]

//outfits
const outfits = [
    {name: "fgfg", characterId: 1, bookId: 1, image: "#"},
    {name: "adad", characterId: 1, bookId: 1, image: "#"},
    {name: "qwqw", characterId: 2, bookId: 2, image: "#"},
    {name: "erer", characterId: 2, bookId: 2, image: "#"},
    {name: "tyty", characterId: 3, bookId: 3, image: "#"},
    {name: "uiui", characterId: 3, bookId: 3, image: "#"},
    {name: "jkjk", characterId: 4, bookId: 3, image: "#"},
    {name: "lmlm", characterId: 4, bookId: 3, image: "#"},
    {name: "fgfg", characterId: 5, bookId: 3, image: "#"},
    {name: "nmnm", characterId: 5, bookId: 3, image: "#"}
]

//export our mock data variables for use elsewhere
module.exports = { characters, books, outfits }