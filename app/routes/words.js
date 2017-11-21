module.exports = function (router, words) {

	router.get('/', (req, res) => {
		words.getAllWords( result => {
			res.render('words.ejs', {words: result});
		});
	});

	// router.get('/id/:id', (req, res) => {
	// 	languages.getById(req.params.id, function(langs){ 
	// 		res.send(langs)
	// 	})
	// });

	// router.get('/lang/:lang', (req, res) => {
	// 	languages.getByLang(req.params.lang, function(langs){ 
	// 		res.send(langs)
	// 	})
	// });

	router.post('/', (req, res) => {
		let data = {
			word : 'newWord',
			language: {
				language: 'pl'
			}
		};
		words.addWord(data, result => {
			res.send(result);		
		});
	});

	// router.delete('/lang/:lang', (req, res) => {
	// 	languages.destroy({
	// 		where:{
	// 			'language': req.params.lang
	// 		}
	// 	})
	// 	.then(lang => {
	// 		res.send({'deleted': lang});
	// 	});
	// });

}