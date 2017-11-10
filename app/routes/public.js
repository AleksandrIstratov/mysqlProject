module.exports = function(router, status) {
	router.get('/', function(req, res){
		require('../../test.js')(status)
		.then(result => {
			res.render('public.ejs', { status: result})});
	});

	router.get('/word', function(req, res){
		const word = require('../models/words.js');
		const lang = require('../models/languages.js');
		let words = null;
		let languages = null;
		let promisWord = new Promise((resolve, reject) => {
			word.getWords('%','%', result => {
				words = result;
				resolve();
			});
		});
		let promisLang = new Promise((resolve, reject) => {
			lang.getAllLanguages(result => {
				languages = result;
				resolve();
			});
		});
		Promise.all([
			promisWord,
			promisLang
		]).then(() => {
			res.render('words.ejs', { languages: languages, words: words});
		});
	});

	router.post('/word', (req, res) => {
		const word = require('../models/words.js');
		word.word = req.body.word;
		word.lang = req.body.language;
		word.addWord(word.word, word.lang, () => {res.redirect('/word')});
	});

	router.get('/lang', function(req, res){
		const lang = require('../models/languages.js');
		lang.getAllLanguages(result => {
			res.render('languages.ejs', { languages: result});
		});
	});

	router.post('/lang', (req, res) => {
		const lang = require('../models/languages.js');
		lang.language = req.body.language;
		lang.addlanguage(lang.language, () => {res.redirect('/lang')});
	});

}