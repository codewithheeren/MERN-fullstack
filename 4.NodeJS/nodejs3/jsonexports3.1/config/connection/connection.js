//Exporting and Importing functions 

var connection = require("../properties/credentials");
module.exports = function(){
    var uname = connection.username;
    var pword = connection.password;
    if(uname == "admin" && pword == "admin"){
        return "login success.";
    }
    else{
        return "login failed.";
    }
}
