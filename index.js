//Load express module with `require` directive
var express = require('express')
var app = express()
var translateController = require('./translate');

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/translate', translateController.translate)
//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
