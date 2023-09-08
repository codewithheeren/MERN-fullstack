const express = require("../../expressJS/node_modules/express");
const connectionFactory = require("../db-config/db-connection");

var connection = connectionFactory.getConnection();
connection.connect();

var router = express.Router();

router.post("/", function(req, res) {
    var item = req.body;

    connection.query(
        "INSERT INTO item (itemid,item_name, price) VALUES (?, ?, ?)",
        [item.id, item.name, item.price],
        function(err, result) {
            if (err) {
                console.log("Error while inserting data.");
                res.status(500).send("Error while inserting data.");
            } else {
                res.send("Item inserted successfully.");
            }
        }
    );
});
module.exports = router;



/*
http://localhost:9090/insert

{
        "id": "1",
        "name": "laptop",
        "price": "5000"
}
*/