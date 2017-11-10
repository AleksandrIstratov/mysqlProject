var Languages = function() {};
var db = require('../../db.js');

Languages.searchlanguageByName = function(language){
	db.searchLanguageByName(language).then(res => {console.log(res)});
};

Languages.addlanguage = function(language, _cb){
	db.addLanguage(language, _cb);
};

Languages.getAllLanguages = function(_cb){
	db.getAllLanguages(_cb);
};

module.exports = Languages;