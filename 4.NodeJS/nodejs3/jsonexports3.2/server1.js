//Exporting and Importing functions 

var http = require("http");
var conn = require("./config/connection/connection");
const server = http.createServer((request, response) => { 
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h3>"+conn({
      username: "admin",   //if change details then login will start getting fail.
      password: "admin"
  })+"</h3>");
    response.end(); //lock response object.
 });
 
 server.listen(8080, () => {
    console.log('Server is listening on port 8080');
 });

