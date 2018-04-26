exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', function(table) {
    table.integer('admin_id').notNullable().primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('middlename').notNullable();
    table.string('gender').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
}
