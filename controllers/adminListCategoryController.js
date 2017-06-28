var express = require('express');
var adminListCategoryRepo =  require('../models/adminListCategoryRepo');
var r = express.Router();

r.get('/', function(req,res){
	adminListCategoryRepo.listcategory()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				categories : rows
			};
			// in ra test thu
			//console.log(rows);
			
			res.render('admin/categories',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});
module.exports = r;