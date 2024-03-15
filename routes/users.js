const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* Desafio Challenge Yourself */
router.get('/cool', function (req, res, next) {
  res.send('You\'re so cool!');
});

module.exports = router;
