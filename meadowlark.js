var express = require('express');

var app = express();

// 设置 handlebars 视图引擎 指明默认布局main
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
})

app.get('/about', function(req, res){
	res.render('about');
})

// 定制404页面 404 catch-all 处理器（中间件）
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

// 定制500页面 500错误处理器（中间件）
app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});