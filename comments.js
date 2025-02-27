// Create web server
// Create a web server that listens for POST requests on the path /comments and saves the POST data to a file called comments.txt.

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;
    if (request.method === 'POST' && path === '/comments') {
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        });
        request.on('end', function() {
            fs.appendFile('comments.txt', body + '\n', function(){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end();
            });
        });
    }
}).listen(8080);