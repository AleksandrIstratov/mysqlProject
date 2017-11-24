module.exports = function(router, models) {

    router.get('/', (req, res) => {
        // models.words.getAllWords(result => {
        //     res.render('words.ejs', { words: result });
        // });

        const word = models.words;
        word.findAll({ include: [{ model: models.languages, as: 'Language' }] })
            .then(result => {
                res.render('words.ejs', { words: result });
            })
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

    router.post('/add', (req, res) => {
        models.words.findAndCountAll({
                where: { word: req.body.word },
                include: [{
                    model: models.languages,
                    as: 'Language',
                    where: { language: req.body.language }
                }]
            })
            .then(result => { result.count > 0 ? res.send(result.rows) : {} });

        const word = models.words.build({ word: req.body.word });
        models.languages.findOne({ where: { language: req.body.language } })
            .then(language => {
                word.setLanguage(language, { save: false });
                word.save()
                    .then(result => { res.send(result) });
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

}