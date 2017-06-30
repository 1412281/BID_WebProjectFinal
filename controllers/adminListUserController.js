var express = require('express');
var adminListUserRepo =  require('../models/adminListUserRepo');
var emailRepo = require('../models/emailRepo');
var accountRepo = require('../models/accountRepo');
var r = express.Router();
var crypto = require('crypto');

r.get('/', function(req,res){
	/*if (res.locals.layoutModels == null) {
        res.redirect('/home/login');
        return false;
    }
    if ((res.locals.layoutModels != null) && (res.locals.layoutModels.curUser.permission != 2)) {
        res.redirect(403, '/home/login');
        return false;
    }*/
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
    accountRepo.getUser(id).then(function(user) {
        var newpw = adminListUserRepo.randomString(8);
        console.log(newpw);
        var hashpw = crypto.createHash('md5').update(newpw).digest('hex');
        console.log(haspw);
        accountRepo.updatepassword(user[0].tenuser, hashpw);
        //m_to, m_subject, m_text, m_html
        var m_to = user[0].email;
        var m_subject = 'Thông báo reset mật khẩu';
        var m_text = 'Thông báo từ BQT Website AutoBid';
        var m_html = '<p>BQT Website AutoBid kính chào <b>' + user[0].hoten +'</b>!</p>';
        m_html += '<p>Mật khẩu mới của tài khoản <b>' + user[0].tenuser + '</b> là: <b>' + newpw + '</b>';
        m_html += '<p>Vui lòng đổi mật khẩu sớm nhất có thể!</p>';
        m_html += '<p>Thân ái! AutoBid</p>';
        m_html += '<ul><li>Email: suport@tintin.vn</li><li>Phone: 18001000</li></ul>';
        emailRepo.sentmail(m_to, m_subject, m_text, m_html);
        res.redirect('/');
    });
    
    
});
module.exports = r;