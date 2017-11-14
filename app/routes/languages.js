module.exports = function (router, languages) {
	router.get('/', function(req, res){
		languages.findAll().then( langs => {
			res.render('languages.ejs', { languages: langs});
		});

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

}