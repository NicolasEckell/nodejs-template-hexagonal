var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("first")
  res.write('health')
  res.send()
});

module.exports = router;
