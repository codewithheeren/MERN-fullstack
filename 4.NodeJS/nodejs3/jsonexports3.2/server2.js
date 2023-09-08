//post request from postman
//return json response
//define function calling of connection module.

const http = require("http");
const url = require("url");
const conn = require("./config/connection/connection")

const server = http.createServer((req, res) => {
   // res.writeHead(200, { 'Content-Type': 'text/html' });
   res.writeHead(200, { 'Content-Type': 'application/json' }); 
   let body = '';
   req.on("data", (data) => {   
      body = body + data;
   });
   req.on("end", () => {   
      console.log(body);    // print request body
      const input = JSON.parse(body); // Parse the input JSON
      const result =  conn(input);
      const output = { "result": result }; // Wrap the result in an object
      res.write(JSON.stringify(output)); 
      res.end(); 
   });
});

server.listen(8080, () => {
   console.log('Server is listening on port 8080');
});
