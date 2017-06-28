var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db'),
	crypto = require('crypto-js');

exports.insert = function(entity) {
	var password = crypto.AES.encrypt(entity.matkhau, 'tdlam@ttlam@nthuong').toString();
	var obj = {
		tenuser: entity.tenuser,
        loaiuser: entity.loaiuser,
        matkhau: password,
        hoten: entity.hoten,
        diachi: '',
        email: entity.email,
        diemcong: 0,
        diemtru: 0,
        ngaytao: '',
        trangthai: 1
    };
    var sql = mustache.render(
        'insert into users(tenuser, loaiuser, matkhau, hoten, diachi, email, diemcong, diemtru, ngaytao, trangthai) values("{{tenuser}}, 2, {{matkhau}}, {{tenuser}}, '', {{email}}, 0, 0, ngaytao, 1}}")',
        entity
    );
    return db.insert(sql);
}