var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadAll = function() {

    var deferred = q.defer();
    var sql = 'select * from loaisp';
    db.load(sql).then(function(rows) {
        deferred.resolve(rows);
    });
    return deferred.promise;
}

exports.loadDetail = function(id) {
	var d = q.defer();
    var obj = {
        maloai: id
    };
    var sql = mustache.render(
        'select * from loaisp where maloai = {{maloai}}',obj);

    db.load(sql).then(function(rows) {
        d.resolve(rows[0]);
    });

    return d.promise;
}

exports.insert = function(entity) {
    var sql = mustache.render(
        'insert into loaisp(tenloai) values("{{tenloai}}")',
        entity
    );

    return db.insert(sql);
}

exports.update = function(entity) {
    var sql = mustache.render(
        'update loaisp set tenloai = "{{tenloai}}" where maloai = {{maloai}}',
        entity
    );

    return db.update(sql);
}

exports.delete = function(entity) {
    var sql = mustache.render(
        'delete from loaisp where maloai = {{maloai}}',
        entity
    );
    return db.delete(sql);
}