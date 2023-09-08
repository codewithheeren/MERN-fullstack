const express = require("../../expressJS/node_modules/express");
const connectionFactory = require("../db-config/db-connection");

var connection = connectionFactory.getConnection();
connection.connect();

var router = express.Router();

router.put("/:itemId", function(req, res) {
    var itemId = req.params.itemId;
    var item = req.body;

    connection.query(
        "UPDATE item SET item_name = ?, price = ? WHERE itemid = ?",
        [item.name, item.price,itemId],
        function(err, result) {
            if (err) {
                console.log("Error while updating data.");
                res.status(500).send("Error while updating data.");
            } else {
                res.send("Item updated successfully.");
            }
        }
    );
});

module.exports = router;