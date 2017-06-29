var express = require('express');
var adminListProductsRepo =  require('../models/adminListProductRepo');
var r = express.Router();

r.get('/', function(req,res){
    /*if (res.locals.layoutModels == null || res.locals.layoutModels == undefined) {
        res.redirect('/home/login');
        return false;
    }
    else 
    if (res.locals.layoutModels.curUser.permission != 2) {
        res.redirect(403, '/home/login');
        return false;
    }*/
	adminListProductsRepo.listapproval()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				approvals : rows
			};			
			res.render('admin/approvals',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    adminListProductsRepo.deletesession(id).then(function(data) {
        res.location('/admin/approvals');
        res.redirect('/admin/approvals');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });

r.get('/approve/:id', function(req, res) {
     var id = req.params.id;
    adminListProductsRepo.updatesessionstatus(id).then(function(data) {
    	res.location('/admin/approvals');
    	res.redirect('/admin/approvals');
    });
});

module.exports = r;