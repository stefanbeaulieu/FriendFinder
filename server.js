var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = 8080;

// create json format
var json = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html' }));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});