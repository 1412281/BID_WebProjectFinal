var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listcategory = function(){
	var sql = 'select * from loaisp';
	return db.load(sql);
}