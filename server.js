var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('views', './app/views');


var env = require('dotenv').load();

//Models
var models = require("./app/models");
 
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine') 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});


var languages = express.Router();
require('./app/routes/languages.js')(languages, models.languages);
app.use('/languages', languages);

var words = express.Router();
require('./app/routes/words.js')(words, models.words);
app.use('/words', words);


// var admin = express.Router();
// require('./app/routes/admin.js')(admin, status);
// app.use('/adm', admin);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
