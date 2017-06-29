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

exports.randomString =  function(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

