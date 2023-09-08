//implementing authentication using middleware.
const express = require("../expressJS/node_modules/express");
const app = express();
const PORT = 9090;

var obj = (req, res, next) => {
 var username = req.query.uname;
 var password = req.query.pword;
 if(username == "admin" && password == "admin@123")
 {
  next();
 }
 else{
  res.send("authentication failed.")
 }
}

app.use(obj);

app.get("/", (req, res) => {
  res.send("<h3>Welcome to Home page.</h3>");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// request url - http://localhost:9090/?uname=admin&pword=admin@123