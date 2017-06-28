var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listuserpact = function(){
	var sql = 'select pdg.maphien, sp.tensp, lsp.tenloai , pdg.giakhoidiem, pdg.giahientai, pdg.thgianbd, sp.nguoidang from sanpham sp, loaisp lsp, phiendaugia pdg where sp.masp = pdg.sanpham and sp.loai = lsp.maloai order by pdg.thgianbd asc';
	return db.load(sql);
}