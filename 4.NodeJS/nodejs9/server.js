// implementing jwt token for autherization.
const express = require("../expressJS/node_modules/express");
const bodyParser = require("../expressJS/node_modules/body-parser");  //read post parameters
var login = require("./login/login");

const app = express();
const PORT = 9090;

//set json MIME Type - (define reqest headers)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/login",login);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
login request- 
http://localhost:9090/login
*/
/*
 {
        "uname":"user",
        "upwrd":"user"
    }
*/