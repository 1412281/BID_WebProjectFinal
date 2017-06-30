var express = require('express');
var categoryRepo =  require('../models/categoryRepo');
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
	categoryRepo.loadAll()
		.then(function(rows){
			var vm = {
				layoutModels: res.locals.layoutModels,
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

r.get('/add', function(req, res) {
    var vm = {
        layout: false,
    };
    res.render('admin/categories_add', vm);
});

r.post('/add', function(req, res) {
    categoryRepo.insert(req.body).then(function(data) {
        res.location('/admin/categories');
        res.redirect('/admin/categories');
    }).catch(function(err) {
        console.log(err);
        res.end('insert fail');
    });
});

r.get('/edit/:id', function(req, res) {
     var id = req.params.id;  
    categoryRepo.loadDetail(id).then(function(cat) {
        var vm = {
            layout: false,
            category: cat
        };
        res.render('admin/categories_edit', vm);
    });
});

r.post('/edit/:id', function(req, res) {
    categoryRepo.update(req.body).then(function(data) {
        res.redirect('../');
    })
});

r.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    categoryRepo.delete(id).then(function(data) {
        res.location('/admin/categories');
        res.redirect('/admin/categories');
    }).catch(function(err) {
        console.log(err);
        res.end('delete fail');
    });
 });


module.exports = r;