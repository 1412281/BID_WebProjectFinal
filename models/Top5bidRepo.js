var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadTop5 = function(){
	var sql = 'select * from topphiendaugia order by soluotdau desc limit 5; select * from topphiendaugia order by giahientai desc limit 5; select * from topphiendaugia order by thgiankt limit 5';
	return db.load(sql);
}