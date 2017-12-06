module.exports = function(router, models) {

    router.get('/', (req, res) => {
        models.dictionaries.findAll({
                include: [{
                    model: models.words,
                    as: 'First',
                    include: [{
                        model: models.languages,
                        as: 'Language'
                    }]
                }, {
                    model: models.words,
                    as: 'Second',
                    include: [{
                        model: models.languages,
                        as: 'Language'
                    }]
                }]
            })
            .then(result => {
                res.send(result);
            });
    });

    // router.post('/', (req, res) => {
    //     models.words.findAndCountAll({
    //             where: { word: req.body.word },
    //             include: [{
    //                 model: models.languages,
    //                 as: 'Language',
    //                 where: { idLanguages: req.body.idLanguages }
    //             }]
    //         })
    //         .then(result => {
    //             if (result.count > 0) {
    //                 return result.rows;
    //             }
    //             const word = models.words.build({ word: req.body.word });
    //             return models.languages.findOne({ where: { idLanguages: req.body.idLanguages } })
    //                 .then(language => {
    //                     word.setLanguage(language, { save: false });
    //                     return word.save()
    //                         .then(result => { return result })
    //                         .catch(error => { console.log(error) });
    //                 })
    //                 .catch(error => { console.log(error) });
    //         })
    //         .then(result => { res.send(result) });
    // });

    // router.put('/:id', (req, res) => {
    //     models.words.findOne({
    //             where: { idWords: req.params.id },
    //             include: [{
    //                 model: models.languages,
    //                 as: 'Language'
    //             }]
    //         })
    //         .then(result => {
    //             result.word = req.body.word;
    //             result.Language.language = req.body.language;
    //             result.setLanguage(result.Language, { save: false });
    //             return result.save()
    //                 .then(result => { return result })
    //                 .catch(error => { console.log(error) });
    //         })
    //         .then(result => { res.send(result) });;
    // });


    // router.delete('/:id', (req, res) => {
    //     models.words.destroy({
    //             where: {
    //                 idWords: req.params.id
    //             }
    //         })
    //         .then(word => {
    //             res.send({ 'deleted': word });
    //         })
    //         .catch(error => { console.log(error) });
    // })
}