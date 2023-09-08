//sending form data from index1.html to node js express
const express = require("../expressJS/node_modules/express");
const bodyParser = require("../expressJS/node_modules/body-parser");
const app = express();
const PORT = 9090;

//set json MIME Type - (define reqest headers)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  console.log(req);
  var uname = req.body.uname;
  var pword = req.body.pword;
  if (uname == "admin" && pword == "admin")
    res.send("<h3>Login success<h3>")
  else
    res.send("<h3>Login Failed<h3>")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
