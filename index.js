const express = require('express');
const routes  = require('./routes');
let app = express();
let port = process.env.PORT || 8000;

app.use('/',routes); 
app.listen(port, err => {
	if(err){
		console.log(err);
	}
	console.log("servidor corriendo");

});