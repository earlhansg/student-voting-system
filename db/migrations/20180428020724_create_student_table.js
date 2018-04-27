exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', function(table) {
    table.integer('id_number').notNullable().primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('middlename').notNullable();
    table.string('gender').notNullable();
    table.string('street').notNullable();
    table.string('barangay').notNullable();
    table.string('city').notNullable();
    table.string('email').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.integer('college_id').references('id').inTable('college');
    table.integer('department_id').references('id').inTable('department');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student');
}
