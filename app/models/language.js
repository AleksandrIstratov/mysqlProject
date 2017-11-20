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

    Language.getById = function(id, callback){
        this
        .findOne({
            where:{
                'idlanguages': id
            }
        })
        .then( result => { callback(result) });
    }

    Language.getByLang = function(lang, callback){
        this
        .findOne({
            where:{
                'language': lang
            }
        })
        .then( result => { callback(result) });
    }

    Language.getAllLanguages = function(callback){
    	this
    	.findAll()
    	.then( (languages) => {
    		callback(languages);
    	});
    }

    Language.delById = function(id, callback){
        this
        .findOne({
            where:{
                'idlanguages': id
            }
        })
        .then( result => { callback(result) });
    }

    Language.addLanguage = function(language, callback){
    	this
    	.create(language).then( (newLanguage) => {
    		callback(newLanguage);
    	});
    }


	return Language;
}