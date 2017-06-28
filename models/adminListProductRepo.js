var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listproductpact = function(){
	var sql = 'select pdg.maphien, sp.tensp, lsp.tenloai , pdg.giakhoidiem, pdg.giahientai, pdg.thgianbd, sp.nguoidang from sanpham sp, loaisp lsp, phiendaugia pdg where sp.masp = pdg.sanpham and sp.loai = lsp.maloai order by pdg.thgianbd asc';
	return db.load(sql);
}

exports.updatestatus = function(id) {
	var entity = {
        maloai: id,
        trangthai: 'ok'
    };
    var sql = mustache.render(
        'update phiendaugia set tinhtrang = {{trangthai}} where maloai = {{maloai}}',
        entity
    );

    return db.update(sql);
}