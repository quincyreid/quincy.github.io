var express = require('express');
var app = express();

var ejs = require('ejs');


app.use(express.static(__dirname + '/dist'));
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});


app.listen(3000);
