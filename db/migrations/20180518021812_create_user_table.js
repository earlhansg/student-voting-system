exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.integer('user_id').nullable().unique();
    table.string('googleId', 50).nullable().unique();
    table.integer('statusId').references('status_id').inTable('status').defaultTo(0);
    table.string('firstname').nullable();
    table.string('lastname').nullable();
    table.string('middlename').nullable();
    table.enu('gender',['Female', 'Male']).nullable();
    table.string('address').nullable();
    table.string('email').notNullable().unique();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
}
