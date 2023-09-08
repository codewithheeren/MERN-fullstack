const express = require("../../expressJS/node_modules/express");
const connectionFactory = require("../db-config/db-connection");
const accessToken = require("../token/generatetoken");
var router = express.Router();

var connection = connectionFactory.getConnection();
connection.connect();

var router = express.Router();

router.post("/", function(req, res) {
    var uname = req.body.uname;
    var upwrd = req.body.upwrd;
    connection.query(
        "SELECT * FROM login_details where uname = '"+uname+"' && upwrd='"+upwrd+"'" ,
        function(err, recordArray,fields) {
            if (recordArray.length>0) {
                var token = accessToken(uname,upwrd,"mysecretkey");
                res.status(200).send({"status":"login success.",
                                      "token" : token
                                    });
            } else {
                console.log(recordArray);
                res.send("login failed.");
            }
        });
    });
module.exports = router;

