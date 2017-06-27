 var express = require('express'),
 	 hbs = require('nodemailer-express-handlebars'),
 	 bodyParser = require('body-parser'),
 	 urlencodeParser = bodyParser.urlencode({extended:false});
 	 ;
var app = express();
app.listen(3001);

var transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'hanhphuclagi00@gmail.com',
        pass: '01232641564'
    }
});

transporter.use('compile', hbs({
	viewPath: 'views',
	extName: '.ejs'
}));

