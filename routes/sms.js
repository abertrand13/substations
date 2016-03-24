var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Substations Viewer' });
}); */

/* MAIN SMS PORTAL THING */
router.post('/', function(req, res, next) {
	console.log(req);
	console.log(req.body);
});

module.exports = router;
