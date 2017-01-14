const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const routes  = require('./routes/indexRoutes');
const cors = require('cors'); // autorizacion desde el backend para headers

let app = express();
let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(cors()); // autorizacion del backend para el front a traves de URL 
app.use('/',routes); 
//mongodb://tallermean:tallermean@ds031812.mlab.com:31812/mlab_workshop_mean
mongoose.connect('mongodb://tallermean:tallermean@ds031812.mlab.com:31812/mlab_workshop_mean', err =>{
	if(err){ console.log(err); }
	console.log("connection success to mongodb");
});
/*
* connect local
mongoose.connect('mongodb://localhost/workshop_mean', err =>{
	if(err){ console.log(err); }
	console.log("connection success to mongodb");
});*/
app.listen(port, err => {
	if(err){
		console.log(err);
	}
	console.log("server running... ");

});