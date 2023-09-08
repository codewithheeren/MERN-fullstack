const express = require("../../expressJS/node_modules/express");
const connectionFactory = require("../db-config/db-connection");

var connection = connectionFactory.getConnection();
connection.connect();

var router = express.Router();

router.delete("/:itemId", function(req, res) {
    var itemId = req.params.itemId;

    connection.query(
        "DELETE FROM item WHERE itemid = ?",
        [itemId],
        function(err, result) {
            if (err) {
                console.log("Error while deleting data.");
                res.status(500).send("Error while deleting data.");
            } else {
                res.send("Item deleted successfully.");
            }
        }
    );
});
module.exports = router;