//Load express module with `require` directive
const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const translateController = require('./translate');

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/translate',
  translateController.translate
)

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
