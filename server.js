
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

/****************************************************************************************************/
var routes = require('./routes/routes');
app.use('/', routes);

//Ending
app.set('port', process.env.PORT || 1500);
var server = app.listen(app.get('port'), function() {	
	console.log("Coupon Dashboard started on PORT:"+app.get('port'));
});
