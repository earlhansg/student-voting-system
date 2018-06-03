exports.up = function(knex, Promise) {
  return knex.schema.createTable('department', function(table) {
    table.integer('id').notNullable().primary();
    table.string('type').notNullable();
    table.integer('college_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('college_id').references('college.id');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('department');
}
