const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.send('hello world')
});
router.get('/google', function (req, res) {
  res.send('hello google')
});

module.exports = router;
