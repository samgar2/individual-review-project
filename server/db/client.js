//Require client from pg
const { Client } = require('pg')

//Establishing the connection to the database (like how we do with http://)
const client = new Client(`postgres://janeausten_4ccm_user:f3ZO6blhctHjFPymnekbD8IP8UQeiI8G@dpg-cmq2i2821fec739jiblg-a/janeausten_4ccm`)

//export for use in other files
module.exports = client