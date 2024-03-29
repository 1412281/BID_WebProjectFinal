var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

exports.sendbidsucess = function(data){
    var m_to = data.nguoidaugia.email;
    var m_subject = 'Thông báo Bid sản phẩm thành công';
    var m_text = 'Thông báo từ BQT Website AutoBid';
    var m_html = '<p>BQT Website AutoBid kính chào <b>' + data.nguoidaugia.hoten +'</b>!</p>';
    m_html += '<p>Bạn đã bid sản phẩm thành công!</p>';
    m_html += '<p>Thân ái! AutoBid</p>';
    m_html += '<ul><li>Email: suport@tintin.vn</li><li>Phone: 18001000</li></ul>';
    sentmail(m_to, m_subject, m_text, m_html);
}

exports.sendbidfail = function(data){
    var m_to = data.nguoidaugia.email;
    var m_subject = 'Thông báo Bid sản phẩm thành công';
    var m_text = 'Thông báo từ BQT Website AutoBid';
    var m_html = '<p>BQT Website AutoBid kính chào <b>' + data.nguoidaugia.hoten +'</b>!</p>';
    m_html += '<p>Bạn đã bị kích khỏi phiên đấu giá sản phẩm!</p>';
    m_html += '<p>Thân ái! AutoBid</p>';
    m_html += '<ul><li>Email: suport@tintin.vn</li><li>Phone: 18001000</li></ul>';
    sentmail(m_to, m_subject, m_text, m_html);
}

exports.sendnewuser = function(user){
    var m_to = user.email;
    var m_subject = 'Thông báo đăng ký tài khoản thành công';
    var m_text = 'Thông báo từ BQT Website AutoBid';
    var m_html = '<p>BQT Website AutoBid kính chào <b>' + user.hoten +'</b>!</p>';
    m_html += '<p>Thân ái! AutoBid</p>';
    m_html += '<ul><li>Email: suport@tintin.vn</li><li>Phone: 18001000</li></ul>';
    sentmail(m_to, m_subject, m_text, m_html);
}

exports.sentmail = function(m_to, m_subject, m_text, m_html){
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        //service: 'Gmail',
        auth:{
            user: 'nth1931995@gmail.com',
            pass: '0919589753'
        }
    });
    var mailOptions = new Object();
    mailOptions.from = 'AutoBid <nth1931995@gmail.com>';
    mailOptions.to  = String(m_to);
    mailOptions.subject = String(m_subject);
    mailOptions.text = String(m_text);
    mailOptions.html = String(m_html);
    
    console.log(mailOptions);
    /*
    var mailOptions = {
        from: 'AutoBid <hanhphuclagi00@gmail.com>',
        to: 'm_to.toString()',
        subject: 'm_subject.toString()',
        text: 'm_text.toString()',
        html: 'm_html.toString()'
    };
    console.log(mailOptions);*/

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        }else{
            console.log('Mesage Sent: '+ info.response);
        }
    });
    transporter.close();
}