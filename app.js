

var express = require('express');
var myRouter = require('./routes.js');
var myBikeRouter = require('./bikeRoutes.js');
var app = express();
var port = process.env.PORT || 3000;
console.log('listening on port ' + port);

app.use("/api", myRouter);
app.use('/bicycles', myBikeRouter);
app.listen(port);
