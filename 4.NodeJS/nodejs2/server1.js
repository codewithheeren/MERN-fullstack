//create http server 
//To run - node server1.js
var http = require("http");   //predefine function use to import module.
http.createServer(function (request, response) {  // createServer function is in http module use to create server.
    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body as "Hello World"  
    response.end('Hello World\n');
}).listen(8081); //define port number for http server.
// once server will up it print message on console.  
console.log('Server running at http://127.0.0.1:8081/');  

/*
HTTP server is predefine module use to create http server.
http server default available in npm engine as it is predefine module.
request and response are predefine objects in node engine.
end is predefine function in response object use to lock response.
*/