var express = require('express');
var app = express();
var request = require('request');

//setting up view engine//
app.set('view engine', 'ejs');

//for landing page//
app.get('/', function(req, res){
    res.render('home');
});

//for displaying result//
app.get('/results', function(req, res){
    var search = req.params.search;
    var url = 'http://www.omdbapi.com/?s='+search+'&apikey=thewdb'
    request(url, function(error, response, body){
        if(!error && responseCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data: data} );
        }
    });    
});

//setting up server//
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie Hub is online');
});