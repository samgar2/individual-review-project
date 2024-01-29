//Require client from pg
const { Client } = require('pg')

//Establishing the connection to the database (like how we do with http://)
const client = new Client(`postgres://janeausten_6jlm_user:cG5Ue7tF2PiTt1jbB6jm4PjGbPZp6cdu@dpg-cmrtsd0cmk4c7383g2tg-a/janeausten_6jlm`)

//export for use in other files
module.exports = client