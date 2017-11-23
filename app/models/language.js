module.exports = function(sequelize, Sequelize) {
    var Language = sequelize.define('languages', {
        idlanguages: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },

        language: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    Language.associate = models => {
        Language.hasMany(models.words, { as: 'Words', foreignKey: 'idlanguage' })
    };

    Language.getById = function(id, callback) {
        this
            .findOne({
                where: {
                    'idlanguages': id
                }
            })
            .then(result => callback(result));
    }

    Language.getByLang = function(lang, callback) {
        Language
            .findOne({
                where: {
                    'language': lang
                }
            })
            .then(result => callback(result));
    }

    Language.getAllLanguages = callback => {
        Language
            .findAll()
            .then(result => callback(result));
    }

    Language.delById = function(id, callback) {
        this
            .findOne({
                where: {
                    'idlanguages': id
                }
            })
            .then(result => callback(result));
    }

    Language.addLanguage = function(language, callback) {
        this
            .create(language)
            .then(result => callback(result));
    }


    return Language;
}