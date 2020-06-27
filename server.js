var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
//var orm = require('./config/orm.js');
const connection = require('./config/connection.js');
var app = express();

var PORT = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	connection.query('SELECT * FROM menu;', function (err, data) {
		if (err) {
			return res.status(500).end();
		}

		res.render('index', { menu: data });
	});
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log('Server listening on: http://localhost:' + PORT);
});
