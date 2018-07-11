// define route and resources
var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.text());
// app.use(express.static('client'))
// app.use will look for the index.html and render
app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', function (req, res) {
  var data = req.body;
  var parsedData = JSON.parse(data);
  var headers = Object.keys(parsedData);
  headers.splice(headers.length - 1, 1);
  //console.log(headers);

  var csv = [];
  var body = [];

  csv.push([headers.join(',')]);


  for(var i = 0; i < headers.length;i++) {

    var header = headers[i];
    body.push(parsedData[header]);
  }

  csv.push(body.join(','));

  var parsedDataRecursion = (parsedData) => {

    parsedData.children.forEach(person => {
      var body = [];
      for (var i = 0; i < headers.length; i++) {
        var header = headers[i];
        //console.log(parsedData[header]);
        body.push(person[header]);
      }
      csv.push(body.join(","));
      if(person.children !== []) {
        return parsedDataRecursion(person);
      }
    })
  }
  parsedDataRecursion(parsedData);
// console.log();
//
  res.send(csv.join('\r\n'));
})

app.listen(3000);
// console.log('listening to server 3000');

// require Express
// invoke Express
// app.use to find the folder to render
// app.listen for starting location of the server
