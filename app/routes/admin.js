module.exports = function (router, status) {
	router.get('/createSchema', function(req, res){
		con.query('CREATE DATABASE IF NOT EXISTS Cards;', function(err, result){
			if(err) throw err;
			status.schemaExists = true;
		});
		res.render('public.ejs', { status: status});
	});
}