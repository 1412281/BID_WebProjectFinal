var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listchecking = function(){
	var sql = '';
	return db.load(sql);
}