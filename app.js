var routers = require('./routers');
var path = require('path');
var swig = require('swig');
var express = require('express');
var app = express();
var server = app.listen(3000, function(){
	console.log('server listening');
});

swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

app.use(express.static(path.join(__dirname,'public')));
app.use('/', routers);
