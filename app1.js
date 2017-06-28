var express = require('express'),
    handlebars = require('express-handlebars'),
    helpers = require('handlebars-helpers')(),
    handlebars_sections = require('express-handlebars-sections'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    wnumb = require('wnumb'),
    homeController = require('./controllers/homeController'),
    adminListUserController = require('./controllers/adminListUserController');
    adminListProductController = require('./controllers/adminListProductController');
    ;
    
var app = express();

app.use(morgan('dev'));

app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    partialsDir: 'views/_partials/',
    helpers: {
        section: handlebars_sections(),
        number_format: function (n) {
            var nf = wnumb({
                thousand: '.'
            });
            return nf.to(n);
        }


    }
}));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', homeController);
app.use('/admin/users', adminListUserController);
app.use('/admin', adminListUserController);
app.use('/admin/products', adminListProductController);
app.listen(3000);