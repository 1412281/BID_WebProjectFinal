var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listuserpact = function(){
	var sql = 'select tenuser, email, diemcong, diemtru from users where roll=0';
	return db.load(sql);
}