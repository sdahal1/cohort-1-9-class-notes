// migration files do the work of defining a change to our database schema: what the tables are and maybe the data inside of them

// create a migration using
// npx knex migrate:make coolMigrationName

// define the up function to actually perform the schema changes we want
// define the down function to undo the up function

// run the migration using npx knex migrate:latest 
// (or npx knex migrate:up )

// run the down function using npx knex migrate:rollback
// (or npx knex migrate:down)

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("suppliers", table => {
    // columns go here
    table.increments('supplier_id').primary();
    table.string("supplier_name");
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");
    
    // timestamps get automatically generated
    table.timestamps(true, true);
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("suppliers");
};
