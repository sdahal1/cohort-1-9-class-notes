// which DB are we connecting to
const env = process.env.NODE_ENV || "development";
// getting the config at the key [env]
const config = require("../../knexfile")[env];
// calling knex and handing config to make db connection
const db_connection = require("knex")(config);

module.exports = db_connection;