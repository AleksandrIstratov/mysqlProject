var mysql = require('mysql');
var configDB = require('./config/database');

var con = mysql.createConnection({
	host: 		configDB.host,
	user: 		configDB.user,
	password: 	configDB.password,
	database: 	configDB.database 
});

function execSQL(sql, params){
	return new Promise(function(resolve, reject){
			var tableExists = false;
			var sql = 'SHOW TABLES LIKE ?;';
			con.query(sql, params, function(err, result){
				if(err) throw err;
				if(result.length == 1){
					tableExists = true;
				}
				resolve(tableExists);
			});
	});
}

exports.testTableExists = function(tbName){
	return new Promise(function(resolve, reject){
		execSQL(sqlTableExists, tbName)
		.then(result => {resolve(result)});
	});
} 

exports.getWordsbyName = function(word, language, _cb){
	const sql = 'SELECT *  '+
				'FROM words '+
				'INNER JOIN languages '+
				'ON words.idlanguages = languages.idlanguages '+
				'WHERE words.word LIKE ? '+
				'AND languages.language LIKE ?;';
	const args = [word, language];
	con.query(sql, args, function(err, result){
			if(err) throw err;
			_cb(result);
	});
}
	
exports.searchLanguageById = function(idlanguages){
	return new Promise(function(resolve, reject){
		const sql = 'SELECT * FROM languages WHERE idlanguages=?;';
		con.query(sql, idlanguages, function(err, result, fields){
				if(err) throw err;
				resolve(result);
		});
	});
}

exports.searchLanguageByName = function(language){
	return new Promise(function(resolve, reject){
		const sql = 'SELECT * FROM languages WHERE language=?;';
		con.query(sql, language, function(err, result, fields){
				if(err) throw err;
				resolve(result);
		});
	});
}	

exports.addLanguage = function(language, _cb){
	return new Promise(function(resolve, reject){
		const uuid = require('uuid/v1')();
		const sql = 'INSERT INTO languages (idlanguages, language) VALUES (?,?);';
		const args = [uuid, language];
		con.query(sql, args, function(err, result, fields){
				if(err) throw err;
				_cb(result.affectedRows);
		});
	});
}

exports.addWord = function(word, language, _cb){
	const uuid = require('uuid/v1')();
	const sql = 'INSERT INTO words (idwords, word, idlanguages) '+
				'SELECT ?, ?, idlanguages '+
				'FROM languages '+
				'WHERE language = ?;';
	const args = [uuid, word, language];
	con.query(sql, args, function(err, result){
			if(err) throw err;
			if(result.affectedRows){
				_cb(result);	
			}
	});
}

exports.getAllLanguages = function(_cb){
	// return new Promise(function(resolve, reject){
		const sql = 'SELECT * FROM languages;';
		con.query(sql, function(err, result){
			if(err) throw err;
			_cb(result);	
		});
	// });
};