// this code exports a function that takes two parameters (uname and upwrd) and returns an encoded JWT using the provided password as a secret key.

var jwt = require("../../expressJS/node_modules/jwt-simple");
module.exports = function(uname,upwrd,password){
    return jwt.encode({
        "uname":uname,
        "upwrd":upwrd
        },
        password
);
};