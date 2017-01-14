const Models = require('.././models/modelito');
exports.init = (req, res) => { // next para middleware
	res.send("hello ctms 2017!").end();
}

exports.create = (req, res) => {
	console.log(req);
	let data = new Models({
		name: req.body.name,
		date: new Date()
	});

	data.save( (err,result) => {
		if(err){ console.log(err); }
		console.log(result);
		res.json(result);
	});

}

exports.view = (req, res) => {
	Models.find((err, data) => {
		if(err){ console.log(err); }
		res.json(data);
	});
}