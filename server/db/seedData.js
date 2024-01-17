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
    {name: "fgfg", bookId: 1, image: "#"},
    {name: "adad", bookId: 1, image: "#"},
    {name: "qwqw", bookId: 2, image: "#"},
    {name: "erer", bookId: 2, image: "#"},
    {name: "tyty", bookId: 3, image: "#"},
    {name: "uiui", bookId: 3, image: "#"},
    {name: "jkjk", bookId: 3, image: "#"},
    {name: "lmlm", bookId: 3, image: "#"},
    {name: "opop", bookId: 3, image: "#"},
    {name: "nmnm", bookId: 3, image: "#"}
]

//export our mock data variables for use elsewhere
module.exports = { characters, books, outfits }