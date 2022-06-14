import express from "express";
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.write('users')
  res.send()
});

export default router;
