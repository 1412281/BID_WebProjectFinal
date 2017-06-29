var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

//Ban: -1
//User: 0
//Seller: 1
//Admin: 2
exports.listuserpact = function(){
	var sql = 'select tenuser, email, diemcong, diemtru from users where permission=0';
	return db.load(sql);
}

exports.delete = function(id) {
    var entity = {
        tenuser: id,
        permission: -1
    };
    var sql = mustache.render(
        'update users set permission = "{{permission}}" where tenuser = {{tenuser}}',
        entity
    );
    return db.delete(sql);
}