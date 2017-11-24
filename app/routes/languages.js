module.exports = function(router, models) {

    router.get('/', function(req, res) {
        models.languages.findAll()
            .then(result => {
                res.render('languages.ejs', { languages: result });
            });
    });

    router.get('/id/:id', (req, res) => {
        models.languages.findById(req.params.id)
            .then(result => res.send(result));
    });

    router.get('/:lang', (req, res) => {
        models.languages.findOne({ where: { 'language': req.params.lang } })
            .then(result => res.send(result));
    });

    router.post('/add', (req, res) => {
        models.languages.findOrCreate({ where: { 'language': req.body.language } })
            .spread((result, created) => { res.send(result) })
    });

    router.delete('/lang/:lang', (req, res) => {
        models.languages.destroy({
                where: {
                    'language': req.params.lang
                }
            })
            .then(lang => {
                res.send({ 'deleted': lang });
            });
    });

}