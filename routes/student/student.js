const router = require('express').Router();
const knex = require ('../../db/knex');
const bcrypt = require('bcrypt-nodejs');


router.post('/createStudent', (req, res) => {
  const userResponse = req.body;
  const password = bcrypt.hashSync(req.body.password);
  const student = {
    firstname    : userResponse.firstname,
    lastname     : userResponse.lastname,
    middlename   : userResponse.middlename,
    gender       : userResponse.gender,
    address      : userResponse.address,
    email        : userResponse.email,
    username     : userResponse.username,
    password     : password,
    college_id   : userResponse.college_id,
    department_id: userResponse.department_id
  };

  return knex('user')
    .insert(student)
    .returning('*')
    .into('user')
    .then(newStudent => res.status(201).json(newStudent))
    .catch(err => next(err));
});


module.exports = router;
