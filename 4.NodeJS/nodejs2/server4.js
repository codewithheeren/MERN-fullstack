// Post request

//Listening post request
//To run - node server3.2.js

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   // listen post params   
   let body = '';
   req.on("data", (data) => {   //data event listen request body.
      body = body + data;
   });
   console.log(body);
   req.on("end", () => {    //end event also trigger on request.
      console.log(body); // print request body
      const query = url.parse(req.url, true).query;
      const username = query.username;
      const password = query.password;
      if (username == "admin" && password == "admin")
         res.write("<h3>Login Success.</h3>");
      else
         res.write("<h3>Login Failed...</h3>");
      res.end(); //lock response object.
   });
});

server.listen(8080, () => {
   console.log('Server is listening on port 8080');
});


// req.on method is a call back method invoke on certain event. 
// req.on(data , . .) method is used to handle the incoming data from the request.
// req.on("end", () => {...}) method is used to listen for the 'end' event of the incoming request. 

// to run program use- 
// request url - http://localhost:8080/?username=admin&password=admin
// will also work with index3.2.html
// to show request body for post request test this using postman.