var express = require('express');
var adminListProductsRepo =  require('../models/adminListProductRepo');
var r = express.Router();

r.get('/', function(req,res){
	adminListProductsRepo.listsession()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				products : rows
			};
			// in ra test thu
			//console.log(rows);
			
			res.render('admin/sessions',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    adminListProductsRepo.deletesession(id).then(function(data) {
        res.location('/admin/sessions');
        res.redirect('/admin/sessions');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });


module.exports = r;