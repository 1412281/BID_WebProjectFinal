var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listuser = function(){
	var sql = 'select u.tenuser, u.email, u.ngaytao, u.trangthai from users u, loaiusers lu where lu.maloaiusers = u.loaiuser and lu.maloaiusers = 2';
	return db.load(sql);
}