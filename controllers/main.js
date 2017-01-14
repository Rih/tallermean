const Models = require('.././models/modelito');
const app = require('../index');
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
			//res.json({data:'Registro con problemas al guardar'});
		}
		console.log(result);
		app.io.sockets.emit('update'); 
		//res.json(result);
	});

}

exports.view = (req, res) => {
	Models.find((err, data) => {
		if(err){ console.log(err); }
		res.json(data);
	});
}