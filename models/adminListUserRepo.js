var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listuserpact = function(){
	var sql = 'select u.tenuser, u.email, u.ngaytao, lqh.tenloai from users u, loaiuser lu, loaiquyenhan lqh where lqh.maloai = u.quyenhan and lu.maloai = u.loaiuser and lu.maloai = 2';
	return db.load(sql);
}