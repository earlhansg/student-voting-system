
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vote-college', function(table) {
    table.increments();
    table.integer('candidate_id').references('id').inTable('college-candidate');
    table.integer('student_id').references('id_number').inTable('student');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vote-college');
}
