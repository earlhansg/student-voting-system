const express = require('express');
const router = express.Router();

const todoRoute = require('./api/user');
const authRoutes = require('./auth/auth');
// const profileRoutes = require('./profile/pofile');

router.use('/user', todoRoute);
router.use('/auth', authRoutes);
// router.use('/profile', profileRoutes);



module.exports = router;
