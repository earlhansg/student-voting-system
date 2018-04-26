
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
  .then(function () {
    // Inserts seed entries
    return knex('admin').insert([
      {
        admin_id: 200111988,
        firstname: 'Earl Hans',
        lastname: 'Genoso',
        middlename: 'Pelin',
        gender: 'Male',
        address: 'CDO',
        email: 'earlhansg@gmail.com'
      },
      {
        admin_id: 200111977,
        firstname: 'Poploy',
        lastname: 'Pelin',
        middlename: 'Genoso',
        gender: 'Male',
        address: 'CDO',
        email: 'earlcollen77@gmail.com'
      }
    ]);
  });
};
