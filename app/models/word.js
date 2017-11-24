module.exports = (sequelize, Sequelize) => {
    var Word = sequelize.define('words', {
        idWords: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },

        word: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    Word.associate = models => {
        Word.belongsTo(models.languages, { as: 'Language', foreignKey: 'idlanguage' })
    };

    Word.addWord = (word, callback) => {
        Word
            .create(word, {
                include: [{
                    model: sequelize.model('languages'),
                    foreignKey: 'idlanguage'
                }]
            })
            .then(result => callback(result));
    }


    Word.getAllWords = callback => {
        Word
            .findAll({
                include: [{
                    model: sequelize.model('languages'),
                    foreignKey: 'idlanguage',
                    as: 'language'
                }]
            })
            .then(result => {
                console.log(result);
                callback(result)
            });
    }

    return Word;
}