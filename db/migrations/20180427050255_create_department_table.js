exports.up = function(knex, Promise) {
  return knex.schema.createTable('department', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('college_id').references('id').inTable('college');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('department');
}
