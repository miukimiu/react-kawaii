var request = require('.');
request.get('https://google.com').timeout(1140).end(function(err, res) { console.log(err); });
request.get('http://google.com').timeout(140).end(function(err, res) { console.log(err); });
request.get('https://google.com').timeout(40).end(function(err, res) { console.log(err); });
request.get('http://google.com').timeout(140).end(function(err, res) { console.log(err); });
request.get('https://google.com').timeout(140).end(function(err, res) { console.log(err); });
request.get('http://google.com').timeout(1140).end(function(err, res) { console.log(err); });
request.get('http://google.com').timeout(40).end(function(err, res) { console.log(err); });
