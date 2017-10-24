var express = require('express'),
	app		= express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/about', function(req, res) {
	res.render('about');
})

app.listen(3000, function( req, res) {
	console.log("Not crazy");
})