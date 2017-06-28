var express = require('express');
var adminListProductsRepo =  require('../models/adminListProductsRepo');
var r = express.Router();

r.get('/', function(req,res){
	adminListProductsRepo.listuserpact()
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
module.exports = r;