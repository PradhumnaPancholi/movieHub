var express = require('express');
var app = express();
var request = require('request');

//setting up view engine//
app.set('view engine', 'ejs');

//for landing page//
app.get('/', function(req, res){
    res.render('home');
});