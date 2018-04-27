
exports.up = function(knex, Promise) {
  return knex.schema.createTable('college-officer', function(table) {
    table.increments();
    table.integer('type').references('id').inTable('college-election');
    table.integer('position_id').references('id').inTable('position');
    table.integer('student_id').references('id_number').inTable('student');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('college-officer');
}
