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

    return Word;
}