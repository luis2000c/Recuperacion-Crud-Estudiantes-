var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  res.send({
    id : 1,
    title : 'HarryPoter'
  });
});

module.exports = router;
