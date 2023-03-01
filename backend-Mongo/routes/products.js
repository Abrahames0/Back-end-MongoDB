var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Que buen poto si lees esto');
});

module.exports = router;
