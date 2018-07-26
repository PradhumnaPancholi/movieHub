var express = require('express');
var app = express();
var request = require('request');

//app config //
app.set('view engine', 'ejs');
app.use(express.static('public'));

//landing page//
app.get('/', function(req, res){
    res.render('home');
});

//displaying result//
app.get('/results', function(req, res){
    var search = req.query.search;
    var url = 'http://www.omdbapi.com/?s='+search+'&apikey=thewdb';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });    
});

//server config//
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie Hub is online');
});