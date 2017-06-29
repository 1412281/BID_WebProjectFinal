var express = require('express');
var adminListProductsRepo =  require('../models/adminListProductRepo');
var r = express.Router();

r.get('/', function(req,res){
	if (res.locals.layoutModels == null) {
        res.redirect('/home/login');
        return false;
    }
    if ((res.locals.layoutModels != null) && (res.locals.layoutModels.curUser.permission != 2)) {
        res.redirect(403, '/home/login');
        return false;
    }
	adminListProductsRepo.listproductpact()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				products : rows
			};
			// in ra test thu
			//console.log(rows);
			
			res.render('admin/products',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    adminListProductsRepo.deleteproduct(id).then(function(data) {
        res.location('/admin/products');
        res.redirect('/admin/products');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });


module.exports = r;