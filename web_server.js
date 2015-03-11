var http = require('http'),fs = require('fs');

var server = http.createServer(function(request, response) {

fs.exists('index.html', function(exists) {
     try {
       if(exists) {
  	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE html>");
	response.write("<html>");
	response.write("<head>");
	response.write("<title>Hello CodeFellows</title>");
	response.write("<head>");
	response.write("<body>");
	response.write("<h1 style='text-align:center'>Hello CodeFellows!</h1>");
	response.write("<h3 style='text-align:center'>Welcome to a simple http server using node.</h3>");
	response.write("<li style='text-align:center; list-style-type: none'><a href='http://www.github.com'>GitHub</a></li>");
	response.write("</body>");
	response.write("</html>");
	response.end();
        } else {
         response.writeHead(500);
        }
    } finally {
         response.end('index.html');
    }
 });
});
 
server.listen(8000);
console.log("Server is listening");