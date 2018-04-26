exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('department').del()
  .then(function () {
    // Inserts seed entries
    return knex('department').insert([
      {
        id: 1,
        name:'Information Technology',
        college_id: 2
      },
      {
        id: 2,
        name:'Architecture',
        college_id: 1
      }
    ]);
  });
};
