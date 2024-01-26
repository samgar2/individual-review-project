//Require client from pg
const { Client } = require('pg')

//Establishing the connection to the database (like how we do with http://)
const client = new Client(`postgres://janeausten_user:9O6svYjpUU8YojAa4T4PGuBagQc8dZGU@dpg-cmq1m5qcn0vc73dl9fd0-a/janeausten`)

//export for use in other files
module.exports = client