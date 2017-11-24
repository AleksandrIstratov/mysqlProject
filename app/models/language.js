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

    return Language;
}