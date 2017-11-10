module.exports = function(status){
	return new Promise((resolve,reject) => {
		var db = require('./db.js');	
		Promise.all([
			db.testTableExists('languages'),
			db.testTableExists('words')
			])
		.then(result => {
			status.tableLanguagesExists = result[0];
			status.tableWordsExists = result[1];
			console.log(status); 
			resolve(status);
		});
	});
}

