exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', function(table) {
    table.integer('id').notNullable().primary();
    table.string('type').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status');
}
