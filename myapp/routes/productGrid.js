var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productGrid', { title: 'Product Grid' });
});

module.exports = router;
