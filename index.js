const express = require('express');

let app = express();

/*app.get('/',function(req, res, next){ // next para middleware
	res.send("hello ctm").end();
});*/

//sintaxis con arrows
app.get('/', (req, res) => { // next para middleware
	res.send("hello ctm").end();

});

app.listen(8000);