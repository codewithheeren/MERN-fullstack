//Exporting and Importing functions 

var http = require("http");
const { connect } = require("http2");
var connection = require("./config/db-properties.js");
const server = http.createServer((request, response) => { 
    response.writeHead(200,{'Content-Type':'text/html'});

    response.write(
        "<h3>"
        +connection.getMysqlConnection()+"<br>"
        +connection.getMongoDBConnection()+"<br>"
        +connection.getOracleConnection()+"</h3>"
    );
    response.end(); //lock response obejct.
 });
 
 server.listen(8080, () => {
    console.log('Server is listening on port 8080');
 });

