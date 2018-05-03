const express = require('express');
const router = express.Router();

const todoRoute = require('./api/user');
const authRoutes = require('./auth/auth');

router.use('/user', todoRoute);
router.use('/auth', authRoutes);



module.exports = router;
