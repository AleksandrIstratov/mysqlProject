module.exports = function(router, models) {

    router.get('/', (req, res) => {
        // models.words.getAllWords(result => {
        //     res.render('words.ejs', { words: result });
        // });

        const word = models.words;
        word.findAll({ include: [{ model: models.languages, as: 'Language' }] }).then(result => {
            console.log(result);
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

    router.post('/', (req, res) => {
        const word = models.words.build({ word: 'newWord' });
        console.log(Object.keys(word));
        models.languages.getByLang('pl', lang => {
            word.setLanguage(lang, { save: false });
            word.save()
                .then((result) => { res.send(result) });
            // models.words.addWord(data, result => {
            //     models.words.setidlanguage = lang.idlanguages;
            //     res.send(result);
            // });
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
    });

}