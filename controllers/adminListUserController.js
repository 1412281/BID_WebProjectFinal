var express = require('express');
var adminListUserRepo =  require('../models/adminListUserRepo');
var r = express.Router();

r.get('/', function(req,res){
	adminListUserRepo.listuserpact()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				users : rows
			};
			// in ra test thu
			//console.log(rows);
			
			res.render('admin/users',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});
module.exports = r;