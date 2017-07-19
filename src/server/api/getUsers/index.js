var router = require('express').Router();
var data = require('./data/data.json');

router.get('/', getUserCollection);

function getUserCollection(req, res, next) {

	if (!data) {
		return next(new Error('No data'));
	}

	res.send(data);

}

module.exports = router;
