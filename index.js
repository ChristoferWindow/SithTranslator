//Load express module with `require` directive
var express = require('express')
var app = express()
var translateController = require('./translate');

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

/**
* @api {post} /translate Translate text
* @apiName Translate text
*
* @apiParam  {String} [text] Text to translate
* @apiParam  {String} [from] From which language
* @apiParam  {String} [to] To which language
*
* @apiSuccess (200) {json}
*/
app.get('/translate', translateController.translate)

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
