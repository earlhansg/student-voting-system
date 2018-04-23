exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('middlename').notNullable();
    table.string('gender').notNullable();
    table.string('address').notNullable();
    table.integer('user_id').notNullable();
    table.string('email').notNullable();
    table.boolean('admin').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
}
