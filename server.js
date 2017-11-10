var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var status = require('./app/models/status');

var public = express.Router();
require('./app/routes/public.js')(public, status);
app.use('/', public);


// var admin = express.Router();
// require('./app/routes/admin.js')(admin, status);
// app.use('/adm', admin);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
