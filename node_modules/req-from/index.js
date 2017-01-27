'use strict';
var resolveFrom = require('resolve-from');

module.exports = function (fromDir, moduleId) {
	return require(resolveFrom(fromDir, moduleId));
};

module.exports.silent = function (fromDir, moduleId) {
	try {
		return require(resolveFrom(fromDir, moduleId));
	} catch (err) {
		return null;
	}
};
