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

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    adminListUserRepo.delete(id).then(function(data) {
        res.location('/admin/users');
        res.redirect('/admin/users');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });

r.get('/reset/:id', function(req, res) {
    var id = req.params.id;
    var newpw = adminListUserRepo.randomString(8);
    
});
module.exports = r;