exports.up = function(knex, Promise) {
  return knex.schema.createTable('election-department', function(table) {
    table.increments();
    table.integer('type').references('id').inTable('department');
    table.date('date_start').notNullable();
    table.date('date_end').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('election-department');
}
