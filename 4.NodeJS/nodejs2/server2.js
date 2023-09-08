//create http server 

//To run - node server2.js
var http = require("http");   
const server = http.createServer((request, response) => {
   //  response.setHeader('Content-Type', 'text/plain');
    response.writeHead(201, { 'Content-Type': 'text/plain' });
    response.write('Hello, World!');
    response.end();
 }); 
 server.listen(8080, () => {
    console.log('Server is listening on port 8080');
 });

