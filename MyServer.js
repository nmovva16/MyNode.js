
var express = require('express'),
//importing the nishi.js which communicates with the mongodb
    nishi = require('./routes/nishi');
 
var app = express();
 //did not use bodyParser as there is no POST operation. 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 //HTTP get operations
app.get('/dyslexia/:id', nishi.findById);
app.get('/dyslexiaImage/:image', nishi.displayImage);
app.get('/nishi/:name', nishi.findByName);

 //app will be listening at port 3000
app.listen(3000,'0.0.0.0');
console.log('Listening on port 3000...');

