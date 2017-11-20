module.exports = (sequelize, Sequelize) => {
	var Word = sequelize.define('words',{
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

	Word.belongsTo(sequelize.model('languages'));

	return Word;
}