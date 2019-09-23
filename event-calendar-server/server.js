const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/db");
const cors = require("cors");
const port = 3005;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
MongoClient.connect(db.url, (err, database) => {
  global.db = db;
  if (err) return console.log(err);
  require("./app/routes")(app, database);

  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
