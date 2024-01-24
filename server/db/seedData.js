//Make some arrays of objects based on the schema I created

//characters
const characters = [
    {name: "Jane Bennet", 
    bookId: 1, 
    description: "The eldest daughter of the Bennet family.", 
    quote: "She had an 'affectionate heart' and 'united with great strength of feeling, a composure of temper and a uniform cheerfulness of manner.' -Jane Austen", 
    image: "https://i.pinimg.com/originals/43/ff/96/43ff969afd412412f3047beda8989dc4.png"},

    {name: "Elizabeth Bennet", 
    bookId: 1, 
    description: "The second eldest daughter of the Bennet family.", 
    quote: "She had 'a lively, playful disposition, which delighted in any thing ridiculous', and had 'more quickness of observation and less pliancy of temper than her sister.' -Jane Austen", 
    image: "https://i.pinimg.com/564x/04/36/30/0436309a08d48c7772ad8f07745687d7.jpg"},

    {name: "Elinor Dashwood", 
    bookId: 2, 
    description: "The eldest daughter of the Dashwood family.", 
    quote: "She 'possessed a strength of understanding, and coolness of judgment. She had an excellent heart;- her disposition was affectionate, and her feelings were strong; but she knew how to govern them.' -Jane Austen", 
    image: "https://hellomhello.files.wordpress.com/2014/04/ss2.jpg"},

    {name: "Marianne Dashwood", 
    bookId: 2, 
    description: "The second eldest daughter of the Dashwood family.", 
    quote: "'She was sensible and clever; but eager in every thing; her sorrows, her joys, could have no moderation. She was generous, amiable, interesting: she was every thing but prudent.' -Jane Austen", 
    image: "https://64.media.tumblr.com/fc6230524736261bdd0871f9067948ca/tumblr_olkpacBL5v1qlll6ko3_r1_540.jpg"},

    {name: "Emma Woodhouse", 
    bookId: 3, 
    description: "The youngest daughter of the Woodhouse family.", 
    quote: "'Handsome, clever, and rich, with a comfortable home and happy disposition, [she] seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her' -Jane Austen", 
    image: "https://i.pinimg.com/736x/26/51/63/2651634f3acd8d02451159c985d60335.jpg"}
]

//books
const books = [
    {title: "Pride and Prejudice", 
    date: 1813, 
    image: "https://m.media-amazon.com/images/I/51DPoWNY28L._AC_UF1000,1000_QL80_.jpg"},

    {title: "Sense and Sensibility", 
    date: 1811, 
    image: "https://simg1.imagesbn.com/p/9781435169494_s600.jpg"},

    {title: "Emma", 
    date: 1815, 
    image: "https://prodimage.images-bn.com/pimages/9781435171367_p0_v2_s1200x630.jpg"}
]

//outfits
const outfits = [
    {name: "White Dress With Pink Ribbon", 
    bookId: 1, 
    image: "https://i.pinimg.com/originals/39/49/84/394984c61f08b344d34b6eb17e2a5421.jpg"},

    {name: "Lace Hat With Blue Coat and Gloves", 
    bookId: 1, 
    image: "https://i.pinimg.com/564x/e4/ce/18/e4ce18d859c7be2555903d8efba792b5.jpg"},

    {name: "Brown Dress With Book", 
    bookId: 1, 
    image: "https://pbs.twimg.com/media/EUEaKNFWoAErVZr.jpg:large"},

    {name: "Long Sleeve Striped Dress", 
    bookId: 1, 
    image: "https://i.pinimg.com/736x/dd/0c/37/dd0c37e6e63164cf35e52ef6ad9ac9dd.jpg"},

    {name: "Long Sleeve Checkered Dress With Ruffles", 
    bookId: 2, 
    image: "https://filmschoolrejects.com/wp-content/uploads/2020/12/Sense-and-Sensibility-movie.jpg"},

    {name: "White And Brown Striped Dress With Hat", 
    bookId: 2, 
    image: "https://64.media.tumblr.com/6341848774adb1ccdd50df70f0979285/tumblr_ozsxsmOjFR1vikq2yo3_1280.jpg"},

    {name: "Lace Dress With Hat And Gloves", 
    bookId: 2, 
    image: "https://i.pinimg.com/originals/c8/f4/73/c8f4730bf0229e7cfa77af130ddba5c4.jpg"},

    {name: "Dark Green Dress At The Piano", 
    bookId: 2, 
    image: "https://i.pinimg.com/736x/62/0c/19/620c198e2f3c07bdc838028efe44fbd6.jpg"},

    {name: "Dress With Flowers and Embroidery", 
    bookId: 3, 
    image: "https://i.pinimg.com/736x/fe/df/bb/fedfbbee8afb59b014d26d968ec90792.jpg"},

    {name: "White And Green Dress With Bows", 
    bookId: 3, 
    image: "https://austenprose.files.wordpress.com/2010/02/95emma001-e1646537295506.jpg"}
]

//export our mock data variables for use elsewhere
module.exports = { characters, books, outfits }