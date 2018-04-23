
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        firstname: 'Earl Hans',
        lastname: 'Genoso',
        middlename: 'Pelin',
        gender: 'Male',
        address: 'CDO',
        user_id:'2011100690',
        email: 'earlhansg@gmail.com',
        admin: 1
      },
      {
        id: 2,
        firstname: 'Juan',
        lastname: 'Cruz',
        middlename: 'Dela',
        gender: 'Male',
        address: 'CDO',
        user_id:'2011100688',
        email: 'juandelacruz@gmail.com',
        admin: 0
      },
      {
        id: 3,
        firstname: 'Poploy',
        lastname: 'Pelin',
        middlename: 'Hans',
        gender: 'Male',
        address: 'CDO',
        user_id:'2011100677',
        email: 'earlcollen77@gmail.com',
        admin: 1
      }
    ]);
  });
};
