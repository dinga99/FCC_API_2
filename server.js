//'use strict'

var express = require('express'),
    routes = require('./app/routes/index.js');
    //mongoose = require('mongoose');

var app = express();

//mongoose.connect('mongodb://localhost:27017/api1');

app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening in port : '+port+'...');
});
