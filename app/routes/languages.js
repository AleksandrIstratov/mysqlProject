module.exports = function (router, languages) {

	router.get('/', function(req, res){
		languages.getAllLanguages( languages => {
			res.render('languages.ejs', { languages: languages});
		});
	});

	router.get('/id/:id', (req, res) => {
		languages.getById(req.params.id, function(langs){ 
			res.send(langs)
		})
	});

	router.get('/lang/:lang', (req, res) => {
		languages.getByLang(req.params.lang, function(langs){ 
			res.send(langs)
		})
	});

	router.post('/', (req, res) => {
		let data = {
			language : req.body.language
		};
		languages.addLanguage(data, () => {
			languages.getAllLanguages( languages => {
				res.render('languages.ejs', { languages: languages});
			});	
		})
	});

	router.delete('/lang/:lang', (req, res) => {
		languages.destroy({
			where:{
				'language': req.params.lang
			}
		})
		.then(lang => {
			res.send({'deleted': lang});
		});
	});

}