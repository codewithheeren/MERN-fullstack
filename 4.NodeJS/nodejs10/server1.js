// This is not working and this is pending
// This just to check mongo db connection working fine or not.
// This program have connection properties.
// This makes db connections and retireve product collection data.

const MongoClient = require('../expressJS/node_modules/mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'rough';

// Collection Name
const collectionName = 'product';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName); //access db
  const collection = db.collection(collectionName); //access collection

  // Find all documents in the collection
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following documents:");
    console.log(docs);
    client.close();
  });
});


// prerequests - 
// install mongodb package
// set path variable - C:\Program Files\MongoDB\Server\5.0\bin

