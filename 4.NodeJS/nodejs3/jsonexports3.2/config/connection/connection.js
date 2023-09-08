//Exporting and Importing parameterize functions 
module.exports = function(connArgs){
    console.log("connection args - "+connArgs);
    var uname = connArgs.username;
    var pword = connArgs.password;
    if(uname == "admin" && pword == "admin"){
        return "login success.";
    }
    else{
        return "login failed.";
    }
}
