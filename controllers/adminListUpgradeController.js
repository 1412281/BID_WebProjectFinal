var express = require('express');
var adminListUserRepo =  require('../models/adminListUserRepo');
var accountRepo = require('../models/accountRepo');
var r = express.Router();

r.get('/', function(req,res){
	if (res.locals.layoutModels == null) {
        res.redirect('/');
        return false;
    }
    if ((res.locals.layoutModels != null) && (res.locals.layoutModels.curUser.permission != 2)) {
        res.redirect(403, '/');
        return false;
    }
	adminListUserRepo.listupgrade()
		.then(function(rows){
			var vm = {
				layoutModels: res.locals.layoutModels,
				users : rows
			};
			// in ra test thu
			//console.log(rows);
			
			res.render('admin/upgrade_users',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    adminListUserRepo.deleteseller(id).then(function(data) {
        res.location('/admin/upgrade_users');
        res.redirect('/admin/upgrade_users');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });

r.get('/upgrade/:id', function(req, res) {
    var id = req.params.id;
    adminListUserRepo.deleteseller(id).then(function(){
        adminListUserRepo.delete(id, 1).then(function(){
            res.location('/admin/upgrade_users');
            res.redirect('/admin/upgrade_users');
        }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
        });
    });
});

module.exports = r;