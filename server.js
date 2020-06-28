var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log('Server listening on: http://localhost:' + PORT);
});
