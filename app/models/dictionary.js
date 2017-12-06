module.exports = (sequelize, Sequelize) => {
    var Dictionary = sequelize.define('dictionaries', {
        idDictionaries: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    });

    Dictionary.associate = models => {
        Dictionary.belongsTo(models.words, { as: 'First', foreignKey: 'idWordsFirst' });
        Dictionary.belongsTo(models.words, { as: 'Second', foreignKey: 'idWordsSecond' });
    };

    return Dictionary;
}