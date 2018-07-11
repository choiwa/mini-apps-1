// define route and resources
var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.text());
// app.use(express.static('client'))
// app.use will look for the index.html and render
app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', function (req, res) {
  var data = req.body;
  var parsedData = JSON.parse(data);
  for (var key in parsedData) {
    console.log(key);
  }




  // res.send();
})

app.listen(3000)

// require Express
// invoke Express
// app.use to find the folder to render
// app.listen for starting location of the server
