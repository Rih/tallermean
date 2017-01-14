const Models = require('.././models/modelito');
exports.init = (req, res) => { // next para middleware
	res.send("hello ctms 2017!").end();
}

exports.create = (req, res) => {
	let data = new Models({
		name: req.body.name,
		date: new Date()
	});

	data.save( (err,result) => {
		if(err){
			console.log(err);
		}
		console.log(result);
		res.json(result);
	});

}