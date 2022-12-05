const express = require("express");
var bodyParser = require('body-parser')
const path = require('path')
const cors = require("cors");

const app = express();
const data_routes = require("./app/router/router.js")
app.use(cors());
app.use(bodyParser.json()); //process of converting a JSON object in text format to a Javascript object that can be used inside a program
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/api",data_routes)
 app.use("/download", express.static(path.join(__dirname, 'uploads')));
require("./app/config/config");
// require("./app/router/router")(app);
const port = "4013";
app.listen(port, (req, res) => {
  console.log(`Server is listening at http://localhost:${port}`);
});
