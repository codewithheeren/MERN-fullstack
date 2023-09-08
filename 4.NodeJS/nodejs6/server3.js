//send middle ware execution date to rest api response.
const express = require("../expressJS/node_modules/express");
const app = express();
const PORT = 9090;

var obj = (req, res, next) => {
  req.key1 = new Date().toLocaleDateString();
  next();
}

app.use(obj);

app.get("/", (req, res) => {
  console.log("I will execute after middleware.");
  res.send(req.key1);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


