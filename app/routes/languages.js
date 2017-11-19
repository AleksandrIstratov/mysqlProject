module.exports = function (router, languages) {

	router.get('/', function(req, res){
		languages.findAll().then( langs => {
			res.render('languages.ejs', { languages: langs});
		});
	});

	router.get('/id/:id', function(req, res){
		languages.getById(req.params.id, function(langs){ 
			res.send(langs)
		})
	});

	router.get('/lang/:lang', function(req, res){
		languages.getByLang(req.params.lang, function(langs){ 
			res.send(langs)
		})
	});

	router.post('/', function(req, res){
		let data = {
			language : req.body.language
		};
		languages.create(data).then( (newLang, created) =>{
			languages.findAll().then( langs => {
				res.render('languages.ejs', { languages: langs});
			});
		});		
	});

	router.delete('/lang/:lang', function(req, res){
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