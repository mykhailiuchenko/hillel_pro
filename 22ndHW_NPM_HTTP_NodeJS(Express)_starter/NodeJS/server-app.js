const express = require('express')
const app = express()
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
const port = 3001

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/get-user-info', (req, res) => {
  fs.readFile('test.json', 'utf-8', function(error, payload) {
    res.send(payload);
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});