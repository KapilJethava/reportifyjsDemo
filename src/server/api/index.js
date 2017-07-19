var router = require('express').Router();
var four0four = require('../utils/404')();
var endPoint, route;

// list of our endpoints to the corresponding router
var apiList = {
	'/getUsers': './getUsers'
};

// load up all the files
for (endPoint in apiList) {
	if (apiList.hasOwnProperty(endPoint)) {
		route = require(apiList[endPoint]);
		router.use(endPoint, route);
	}
}

// if nothing above matches, return 404
router.use('/*', four0four.notFoundMiddleware);

module.exports = router;
