//server.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var socket = require('socket.io');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

/*app.get('/', function(req, res){
    res.send('hello');
});*/

app.listen(8080, function(){
    console.log('Listening on port 8080');
});