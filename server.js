var express = require('express'),
	path = require('path'),
	app = express(),
	port = process.env.PORT ? process.env.PORT : 8080,
	dist = path.join(__dirname, 'dist')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(dist));

// router order matters
// see example for route named `/`
app.get('/', function (req, res) {
	res.sendFile(path.join(dist, 'index.html'));	
});

// any other is mapped here
app.get('*', function(req, res) {
	
	// Catch-all route after the ones you want to exclude like the example before '/' 
	// or exclude it here (this has the advantage of ordering however you'd like)
	if (req.url === '/' || req.url === '/login') {
		return next()
	};

	res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, function (error) {

	if (error) {
		console.log(error); // eslint-disable-line no-console
	}

	console.info('Express is listening on port %s.', port); // eslint-disable-line no-console

});