const express = require('express');
const router = express.Router();

const todoRoute = require('./api/user');

router.use('/user', todoRoute);


module.exports = router;
