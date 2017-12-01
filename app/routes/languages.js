module.exports = function(router, models) {

    router.get('/', function(req, res) {
        models.languages.findAll()
            .then(result => {
                res.render('languages.ejs', { languages: result });
            });
    });

    router.get('/:id', (req, res) => {
        models.languages.findById(req.params.id)
            .then(result => res.send(result));
    });

    router.post('/', (req, res) => {
        models.languages.findOrCreate({ where: { 'language': req.body.language } })
            .spread((result, created) => { res.send(result) })
    });

    router.put('/:id', (req, res) => {
        models.languages.findOne({ where: { 'idLanguages': req.params.id } })
            .then(result => {
                result.language = req.body.language;
                return result.save();
            })
            .then(result => { res.send(result) })
    });

    router.delete('/:id', (req, res) => {
        models.languages.destroy({
                where: {
                    'idLanguages': req.params.id
                }
            })
            .then(lang => {
                res.send({ 'deleted': lang });
            });
    });

}