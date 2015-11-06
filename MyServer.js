var express = require('express'),
    nishi = require('./routes/nishi');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/dyslexia/:id', nishi.findById);
app.get('/dyslexiaImage/:image', nishi.displayImage);
app.get('/nishi/:name', nishi.findByName);
 
app.listen(3000,'0.0.0.0');
console.log('Listening on port 3000...');

