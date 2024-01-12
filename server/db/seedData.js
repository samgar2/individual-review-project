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
    {name: "#", characterId: 1, bookId: 1, image: "#"},
    {name: "#", characterId: 1, bookId: 1, image: "#"},
    {name: "#", characterId: 2, bookId: 2, image: "#"},
    {name: "#", characterId: 2, bookId: 2, image: "#"},
    {name: "#", characterId: 3, bookId: 3, image: "#"},
    {name: "#", characterId: 3, bookId: 3, image: "#"},
    {name: "#", characterId: 4, bookId: 4, image: "#"},
    {name: "#", characterId: 4, bookId: 4, image: "#"},
    {name: "#", characterId: 5, bookId: 5, image: "#"},
    {name: "#", characterId: 5, bookId: 5, image: "#"}
]

//export our mock data variables for use elsewhere
module.exports = { characters, books, outfits }