//Exporting and Importing json object

var http = require("http");
var obj = require("./config/db-properties");
const server = http.createServer((request, response) => { 
    response.writeHead(200,{'Content-Type':'text/html'});

    response.write(
        "<h3>"
        +obj.database+"<br>"
        +obj.host+"<br>"
        +obj.port+"<br>"
        +obj.user+"</h3>"
    );
    response.end(); //lock response obejct.
 });
 
 server.listen(8080, () => {
    console.log('Server is listening on port 8080');
 });

// require is the function use to import and export module.
// module is the global object available in ECMA.
// module object used to export the json objects, functions and counters.