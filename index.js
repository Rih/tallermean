const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const routes  = require('./routes/indexRoutes');
const cors = require('cors'); // autorizacion desde el backend para headers
// dependencias para socket io
const http = require('http');
const socket = require('socket.io');

let app = express();
let server = http.createServer(app);
var io = socket(server);

let port = process.env.PORT || 8000;
exports.io = io;
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
server.listen(port, err => {
	if(err){
		console.log(err);
	}
	console.log("server running... ");

});
/* //version sin socket io 
app.listen(port, err => {
	if(err){
		console.log(err);
	}
	console.log("server running... ");

});*/