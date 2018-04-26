
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('college').del()
  .then(function () {
    // Inserts seed entries
    return knex('college').insert([
      {
        name: 'College of Engineering'
      },
      {
        name: 'College of Technology'
      }
    ]);
  });
};
