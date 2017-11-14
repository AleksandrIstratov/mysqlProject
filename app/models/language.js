module.exports = function(sequelize, Sequelize) {
	var Language =  sequelize.define('languages',{
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

	return Language;
}