const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "157.245.59.56",
  user: "u6402267",
  password: "6402267",
  database: "u6402267_Men's_fashion_clothes",
  port: 3366,
});

var app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    status: "ok",
    message: "Hellow World",
  });
});

app.get("/customer", function (req, res) {
  connection.query("SELECT * FROM a1_customer", function (err, results) {
    console.log(results);
    res.json(results);
  });
});

app.get("/order", function (req, res) {
  connection.query("SELECT * FROM a1_order", function (err, results) {
    console.log(results);
    res.json(results);
  });
});

app.get("/product", function (req, res) {
  connection.query("SELECT * FROM a1_product", function (err, results) {
    console.log(results);
    res.json(results);
  });
});


app.listen(5000, () => {
  console.log("Server is started.");
});