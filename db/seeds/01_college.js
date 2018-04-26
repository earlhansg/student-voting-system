
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('college').del()
  .then(function () {
    // Inserts seed entries
    return knex('college').insert([
      {
        id: 1,
        name: 'College of Engineering'
      },
      {
        id: 2,
        name: 'College of Technology'
      },
      {
        id: 3,
        name: 'College of Teachers'
      }
    ]);
  });
};
