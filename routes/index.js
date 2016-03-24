var express = require('express');
var Firebase = require('firebase');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Substations Viewer' });
});

/* MAIN SMS PORTAL THING */
router.post('/', function(req, res, next) {
	var text = req.body.Body;

	// connect to firebase	
	var db = new Firebase('https://substations.firebaseio.com');
	
	// parse body for alphanumeric substation code
	var subcodeReg = /([A-Z0-9]{3})/g;
	var subcodeResults = subcodeReg.exec(text);
	var subcode;
	if(subcodeResults) {
		subcode = subcodeResults[1];
	} else {
		res.send('An error occurred while identifying the substation.');
		return;
	}

	if(text.includes('In') || text.includes('in')) {
		db.child(subcode).transaction(function(val) {
			return val + 1;	
		});
		
	} else if(text.includes('Out') || text.includes('out')) {	
		db.child(subcode).transaction(function(val) {
			return val - 1 >= 0 ? val - 1 : 0;	
		});
	}
	
	res.send('Hello World!'); // this is useless.
});

module.exports = router;
