var Words = function() {};
var db = require('../../db.js');

Words.addWord = function(word, language, _cb){
	db.addWord(word, language, _cb);
}

Words.getWords = function(word, language, _cb){
	db.getWordsbyName(word, language, _cb);
}

module.exports = Words;