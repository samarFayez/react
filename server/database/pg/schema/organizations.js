const knex = require("../knex");
const {
  ORGANIZATIONS_TABLE_NAME,
  ORGANIZATIONTYPES_TABLE_NAME
} = require("../tableNames");

module.exports = () =>
  knex.schema.hasTable(ORGANIZATIONS_TABLE_NAME).then(exists => {
    if (exists) return;

    return knex.schema.createTable(ORGANIZATIONS_TABLE_NAME, table => {
      table.increments();
      table.string("title", 500);
      table.string("description", 5000);
      table.string("url", 1000);
      table
        .integer("organizationTypes_id")
        .references("id")
        .inTable(ORGANIZATIONTYPES_TABLE_NAME);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at");
    });
  });
