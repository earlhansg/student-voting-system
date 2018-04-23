const express = require('express');
const router = express.Router();
const db = require('../../db/knex');


router.get('/', function(req, res){
  db.select().from('users').then(function(users){
    res.send(users);
  })
});

module.exports = router;
