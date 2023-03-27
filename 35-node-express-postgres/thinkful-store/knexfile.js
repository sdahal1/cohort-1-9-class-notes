const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  //connecting to our DB
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    //telling knex where to put migration files
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    //telling knex where to put seed files
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  },
};
