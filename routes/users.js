var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true, route: "users", message: "welcome to the users page"})
});

module.exports = router;
