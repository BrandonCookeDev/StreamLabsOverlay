'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/../OverlayFiles'))
app.use(express.static(__dirname + '/../node_modules'))
app.use(express.static(__dirname + '/../StreamLabs'))

app.listen(8080, function(err){
	console.log('listening on 8080');
})