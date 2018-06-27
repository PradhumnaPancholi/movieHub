var express = require('express');
var app = express();
var request = require('request');

//setting up view engine//
app.set('view engine', 'ejs');

//for landing page//
app.get('/', function(req, res){
    res.render('home');
});

//setting up server//
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie Hub is online');
});