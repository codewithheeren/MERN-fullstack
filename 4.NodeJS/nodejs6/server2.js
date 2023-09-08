//implementing middle ware.
const express = require("../expressJS/node_modules/express");
const app = express();
const PORT = 9090;

var obj = (req, res, next) => {
  console.log("I will execute before REST API.");
  // perform authentication or other operations 
  next();
}

app.use(obj); //tells the Express application to use the obj middleware

app.get("/", (req, res) => {
  console.log("I will execute after middleware.");
  res.send("Hello, World!");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// middle ware will execute before routing.
// middle ware use to perform the authentication.
