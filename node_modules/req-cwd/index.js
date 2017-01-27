'use strict';
var reqFrom = require('req-from');

module.exports = function (moduleId) {
	return reqFrom('.', moduleId);
};

module.exports.silent = function (moduleId) {
	return reqFrom.silent('.', moduleId);
};
