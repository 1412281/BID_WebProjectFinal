var express = require('express');
var sellerRepo =  require('../models/sellerRepo');
var r = express.Router();

r.get('/', function(req,res){
	sellerRepo.loadsanphamban()
		.then(function(rows){
			var vm = {
				layoutVM: res.locals.layoutVM,
				danhsachdangdaugia: rows[0],
				danhsachchuadang: rows[1],
				danhsachdaban: rows[2],
				danhsachloai: rows[3]
			};
			console.log(rows[2]);
		res.render('seller/listproducts',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
		});
});

r.get('/masp=:masp',function(req,res){
	var data  = {
		"masp": req.params.masp
	}
	sellerRepo.loadsanphamban_byID(data.masp)
		.then(function(rows2){
			var vm = {
				sanpham: rows2[1][0],
				imageurls: rows2[0]
			};
			console.log(rows2);
			res.render('seller/productdetails',vm);
			}).fail(function(err){
				console.log(err);
				res.end('fail');
		});

});




module.exports = r;