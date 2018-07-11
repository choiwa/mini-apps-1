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
  var headers = Object.keys(parsedData);
  console.log(headers);
  var body = [];

  var parsedDataRecursion = (parsedData) => {

    parsedData.children.forEach(person => {
      for (var i = 0; i < headers.length - 1; i++) {
        var header = headers[i];
        //console.log(parsedData[header]);
        body.push(person[header]);
      }
      if(person.children !== []) {
        return parsedDataRecursion(person);
      }
    })
  }
  parsedDataRecursion(parsedData);
  console.log(body);
})

app.listen(3000)
console.log('listening to server 3000');

// require Express
// invoke Express
// app.use to find the folder to render
// app.listen for starting location of the server
