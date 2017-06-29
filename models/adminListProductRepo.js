var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.listproductpact = function(){
	var sql = 'select sp.masp, sp.tensp, lsp.tenloai, sp.nguoidang from sanpham sp, loaisp lsp where sp.loai = lsp.maloai';
	return db.load(sql);
}

exports.listsession = function(){
    var sql = 'select pdg.maphien, sp.tensp, lsp.tenloai, sp.nguoidang, pdg.giakhoidiem, pdg.buocgia from sanpham sp, loaisp lsp, phiendaugia pdg where sp.loai = lsp.maloai and sp.masp = pdg.sanpham and pdg.tinhtrang is not null and pdg.tinhtrang != "" group by pdg.maphien';
    return db.load(sql);
}

exports.listapproval = function(){
    var sql = 'select pdg.maphien, sp.tensp, lsp.tenloai, sp.nguoidang, pdg.giakhoidiem, pdg.buocgia from sanpham sp, phiendaugia pdg, loaisp lsp where sp.masp = pdg.sanpham and sp.loai = lsp.maloai and pdg.tinhtrang is null or pdg.tinhtrang = "" group by pdg.maphien order by pdg.thgianbd asc';
    return db.load(sql);
}

exports.updatesessionstatus = function(id) {
    console.log(id);
	var entity = {
        maphien: id,
        tinhtrang: 'ok'
    };
    var sql = mustache.render(
        'update phiendaugia set tinhtrang = {{tinhtrang}} where maphien = {{maphien}}',
        entity
    );
    return db.update(sql);
}

exports.deleteproduct = function(id) {
    var entity = {
        masp: id
    };
    var sql = mustache.render(
        'delete from sanpham where masp = {{masp}}',
        entity
    );
    return db.delete(sql);
}

exports.deletesession = function(id) {
    var entity = {
        maphien: id
    };
    var sql = mustache.render(
        'delete from phiendaugia where maphien = {{maphien}}',
        entity
    );
    return db.delete(sql);
}