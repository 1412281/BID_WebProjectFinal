var express = require('express'),
    handlebars = require('express-handlebars'),
    helpers = require('handlebars-helpers')(),
    handlebars_sections = require('express-handlebars-sections'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    wnumb = require('wnumb'),
    homeController = require('./controllers/homeController'),
    searchController = require('./controllers/searchController'),
    accountController = require('./controllers/accountController'),
    layoutController = require('./controllers/layoutController'),
    handle403 = require('./midle-wares/handle-403'),
    sellController = require('./controllers/sellController.js');
var i18n = require("i18n");
var validate = require('form-validate');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);


var app = express();

app.use(morgan('dev'));

app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    partialsDir: 'views/_partials/',
    helpers: {
        section: handlebars_sections(),
        number_format: function(n) {
            var nf = wnumb({
                thousand: '.'
            });
            return nf.to(n);
        }


    }
}));
app.set('view engine', 'hbs');

i18n.configure({
    locales: ['en', 'de'],
    directory: __dirname + '/locales'
});

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session({
    secret: 'Z7X7gXzoKBT8h18jwXBEP4T0kJ8=',
    resave: false,
    saveUninitialized: true,
    // store: new fileStore()
    store: new MySQLStore({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'daugia',
        createDatabaseTable: true,
        schema: {
            tableName: 'sessions',
            columnNames: {
                session_id: 'session_id',
                expires: 'expires',
                data: 'data'
            }
        }
    }),
}));

var validationConfig = {
    //You can configure certain aspects of the validation module 
};
app.use(validate(app, validationConfig));

app.use(layoutController);

app.use('/', homeController);
app.use('/search', searchController);
app.use('/login', accountController);
app.use('/seller', sellController);
app.use(handle403);
app.listen(3000);



// var xRefresh = setInterval(function(){
//     homeController.Refresh('1');
// },1000);