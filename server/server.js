'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../webapp'))
app.use(express.static(__dirname + '/../OverlayFiles'))
app.use(express.static(__dirname + '/../node_modules'))
app.use(express.static(__dirname + '/../StreamLabs'))
app.use(express.static(__dirname + '/../resources'))

let port = 8080;
app.listen(port, function(err){
	console.log('listening on %s', port);
})