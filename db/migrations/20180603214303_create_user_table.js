exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.integer('user_id').nullable().unique();
    table.string('googleId', 1000).nullable().unique();
    table.string('username').nullable();
    table.string('password').nullable();
    table.integer('status_id').notNullable().defaultTo(0);
    table.integer('college_id').notNullable().defaultTo(0);
    table.integer('department_id').notNullable().defaultTo(0);
    table.string('firstname').nullable();
    table.string('lastname').nullable();
    table.string('middlename').nullable();
    table.enum('gender',['Female', 'Male']).nullable();
    table.string('address').nullable();
    table.string('email').notNullable().unique();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('status_id').references('status.id');
    table.foreign('college_id').references('college.id');
    table.foreign('department_id').references('department.id');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
}
