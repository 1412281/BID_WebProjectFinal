var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listuserpact = function(){
	var sql = 'select pdg.maphien, sp.tensp, lsp.tenloai , pdg.giakhoidiem, pdg.giahientai, ha.urlhinhanh, sp.nguoidang, ltt.tentinhtrang from sanpham sp, loaisp lsp, phiendaugia pdg, hinhanh ha, loaitinhtrang ltt where sp.masp = pdg.sanpham and sp.masp = ha.masp and sp.loai = lsp.maloai and pdg.tinhtrang = ltt.maloai';
	return db.load(sql);
}