var express = require('express');
var top5rePo =  require('../models/Top5bidRepo');
var r = express.Router();

r.get('/', function(req,res){
	top5rePo.loadTop5()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				top5hot: rows[0],
				top5max: rows[1],
				top5end: rows[2] 
			};
			// in ra test thu
			console.log(rows[0]);
			console.log(rows[1]);
			console.log(rows[2]);
			
			res.render('home/index',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
			});
});





module.exports = r;